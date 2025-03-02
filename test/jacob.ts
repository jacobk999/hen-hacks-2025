import { MoviesProvider } from "../lib/movies.ts";

const provider = new MoviesProvider(process.env.TMDB_API_KEY, process.env.YOUTUBE_API_KEY);

const movie = await provider.getMeMyTrailers("balls");