import type { AiMediaProvider } from "~/lib/common";
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { z } from "zod";
import Genius from "genius-lyrics";

export interface Song {
	id: string;
	name: string;
	url: string;
	coverUrl: string;
	isExplicit: boolean;

	album: {
		name: string;
		url: string;
	}

	artists: {
		id: string;
		name: string;
		url: string;
	}[];
}

export interface SongQuery {
	name: string;
	artist: string;
}

export class SongsProvider implements AiMediaProvider<SongQuery, Song> {
	#sdk: SpotifyApi;
	#genius: Genius.Client;

	constructor(clientId: string, clientSecret: string) {
		this.#sdk = SpotifyApi.withClientCredentials(clientId, clientSecret, []);
		this.#genius = new Genius.Client();
	}

	querySchema() {
		return z.object({ name: z.string(), artist: z.string() })
	}

	async getByQuery(query: SongQuery): Promise<Song | undefined> {
		const response = await this.#sdk.search(query.name + " " + query.artist, ["track"], "US", 1);
		const song = response.tracks.items[0];

		console.log(song);

		return {
			id: song.id,
			name: song.name,
			url: song.external_urls.spotify,
			coverUrl: song.album.images[0].url,
			isExplicit: song.explicit,
			album: {
				name: song.album.name,
				url: song.album.external_urls.spotify
			},

			artists: song.artists.map(artist => ({
				id: artist.id,
				name: artist.name,
				url: artist.external_urls.spotify
			}))
		}
	}
	async getLyrics(songName: string) {
		const searches = await this.#genius.songs.search(songName)
		const song0 = searches[0];
		return await song0.lyrics();
	}
}