import { MoviesProvider } from "../lib/movies.ts";
import { aiRecommendations, aiFlashcards } from "../lib/ai.ts";
import z from "zod";

const provider = new MoviesProvider(process.env.TMDB_API_KEY, process.env.YOUTUBE_API_KEY);

const generatedMovie = await aiRecommendations({
	provider: provider,
	media: "movie",
	genres: ["comedy"],
	targetLanguage: "spanish",
	limit: 1,
});

console.log(generatedMovie)