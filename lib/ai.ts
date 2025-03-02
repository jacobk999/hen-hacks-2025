import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import z from "zod";
import type { AiMediaProvider } from './common';

const model = google('gemini-1.5-pro-latest');

type Media = "song" | "book" | "movie";

const exclusions: Record<Media, string[]> = {
	book: [],
	song: [],
	movie: []
}

const EXCLUSION_CAPACITY = 50;

type RecommendationParams<Query, Resource> = {
	provider: AiMediaProvider<Query, Resource>,
	media: Media,
	genres: string[],
	limit: number,
	targetLanguage: string
}

export async function aiRecommendations<Query, Resource extends { name: string }>({ provider, media, genres, limit, targetLanguage }: RecommendationParams<Query, Resource>) {
	const excludedMedia = exclusions[media];

	const { object: queries } = await generateObject({
		model,
		schema: z.array(provider.querySchema()),
		system: `Only give recommendations that are HIGHLY related and RELEVANT to the query being asked. Every recommendation should be in ${targetLanguage} and accessible for beginner learners in ${targetLanguage} to understand. All responses should exclude items from ${excludedMedia.join(", ")}`,
		prompt: `Give me ${limit} ${media} recommendations. The recommendations should be VERY related to ${genres.join(", ")}. `
	});

	const responses = await Promise.all(queries.map(query => provider.getByQuery(query)));
	const resources = responses.filter(resource => resource !== undefined);

	addMediaExclusions(media, EXCLUSION_CAPACITY, resources.map(resource => resource.name));

	return resources;
}

function addMediaExclusions(media: Media, limit: number, items: string[]) {
	const excluded = exclusions[media];
	excluded.push(...items);

	if (excluded.length > limit)
		exclusions[media] = excluded.slice(excluded.length - limit, limit);
}


let pastCards: string[] = [];

export async function aiFlashcard(targetLanguage: string, knownLanguage: string, cards: number) {
	let hashmap: Map<string, string> = new Map()
	const { object } = await generateObject({
		model,
		output: 'array',
		schema: z.object({
			foreignText: z.string(),
			knownText: z.string()
		}),
		system: `Exclude any of the listed phrases: ${pastCards}`,
		prompt: `Provide a common phrase(s) in ${targetLanguage} and in ${knownLanguage}`
	});
	for (let i = 0; i < cards; i++) {
		pastCards.push(object[i].foreignText)
		hashmap.set(object[i].knownText, object[i].foreignText);
	}

	return hashmap;
}

