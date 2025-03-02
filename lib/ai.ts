import { google } from '@ai-sdk/google';
import { generateObject, generateText } from 'ai';
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
		output: "array",
		schema: provider.querySchema(),
		system: `Only give recommendations that are HIGHLY related and RELEVANT to the query being asked. Every recommendation should be in the ${targetLanguage} language and accessible for beginner learners in ${targetLanguage} to understand. If the recommendation is not in ${targetLanguage} try again. All responses should exclude items from ${excludedMedia.join(", ")}`,
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


const pastCards: Set<string> = new Set();

export async function aiFlashcards(targetLanguage: string, knownLanguage: string, cards: number) {
	const { object } = await generateObject({
		model,
		output: 'array',
		schema: z.object({
			foreignText: z.string(),
			knownText: z.string()
		}),
		system: `Exclude any of the listed phrases: ${[...pastCards.values()].join(", ")}`,
		prompt: `Provide ${cards} common phrase(s) in ${targetLanguage} and in ${knownLanguage}`
	});

	object.forEach((card) => pastCards.add(card.foreignText));

	return object;
}

export async function aiChat(prompt: string) {
	const { text } = await generateText({
		model,
		prompt: prompt,
	});

	return text;
}

