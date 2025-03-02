import { SongsProvider } from "../lib/songs.ts";
import { aiRecommendations, aiFlashcard } from "../lib/ai.ts";
//import { MoviesProvider } from "../lib/movies.ts"
import z from "zod";


//const movieProvider = new MoviesProvider(process.env.TMDB_API_KEY);
const songProvider = new SongsProvider(process.env.SPOTIFY_ClIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);


/*
const movies = await aiRecommendations({
	schema: z.object({ name: z.string(), year: z.number() }),
	provider: movieProvider,
	media: "movie",
	genres: ["comedy"],
	targetLanguage: "spanish",
	limit: 10,
});
*/

/*
const songs = await aiRecommendations({
	schema: z.object({ name: z.string(), artist: z.string() }),
	provider: songProvider,
	media: "song",
	genres: ["rap"],
	targetLanguage: "english",
	limit: 10,
});
*/

const cards = await aiFlashcard(
	"spanish", //targetLanguage
	"english", //knownLanguage
	5 //count
)


console.log(cards);

