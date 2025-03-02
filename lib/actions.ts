"use server";

import { aiFlashcards, aiRecommendations } from "./ai";
import { MoviesProvider } from "./movies";
import { SongsProvider } from "./songs";
import { BooksProvider } from "./books";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SPOTIFY_ClIENT_ID: string;
			SPOTIFY_CLIENT_SECRET: string;
			TMDB_API_KEY: string;
			GOOGLE_BOOKS_API_KEY: string;
		}
	}
}

const movieProvider = new MoviesProvider(process.env.TMDB_API_KEY);

export async function getMovies(genres: string[], targetLanguage: string) {
	return aiRecommendations({
		provider: movieProvider,
		media: "movie",
		limit: 10,
		genres,
		targetLanguage
	})
}

const songProvider = new SongsProvider(process.env.SPOTIFY_CLIENT_ID!, process.env.SPOTIFY_CLIENT_SECRET);

export async function getSongs(genres: string[], targetLanguage: string) {
	const songs = await aiRecommendations({
		provider: songProvider,
		media: "song",
		limit: 5,
		genres,
		targetLanguage
	});

	return songs;
}

const bookProvider = new BooksProvider(process.env.GOOGLE_BOOKS_API_KEY);

export async function getBooks(genres: string[], targetLanguage: string) {
	return aiRecommendations({
		provider: bookProvider,
		media: "book",
		limit: 5,
		genres,
		targetLanguage
	});
}

export async function getFlashcards(knownLanguage: string, targetLanguage: string) {
	return aiFlashcards(targetLanguage, knownLanguage, 5);
}