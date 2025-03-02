// import { BooksProvider } from "../lib/books.ts";


// const provider = new BooksProvider(process.env.GOOGLE_BOOKS_API_KEY);

// const book = await provider.getByQuery({
// 	name: "Harry Potter",
// 	author: "Rowling"
// });

import { SongsProvider } from "../lib/songs.ts";

const provider = new SongsProvider(process.env.SPOTIFY_ClIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);

const lyrics = await provider.getLyrics("Rap God");

console.log(lyrics);




