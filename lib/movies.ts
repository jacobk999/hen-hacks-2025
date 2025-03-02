import { z } from "zod";
import type { AiMediaProvider } from "~/lib/common";
export interface Movie {
	id: string;
	imdbURL: string;
	name: string;
	description: string;

	language: string;
	releaseDate: string;

	posterUrl: string;
	backdropUrl: string;
}

export interface MovieQuery {
	name: string;
	year: number;
}

export class MoviesProvider implements AiMediaProvider<MovieQuery, Movie> {
	#tmDbApiKey: string;
	constructor(tmDbApiKey: string) {
		this.#tmDbApiKey = tmDbApiKey;
	}

	querySchema() {
		return z.object({ name: z.string(), year: z.number() })
	}

	async getByQuery(query: MovieQuery): Promise<Movie | undefined> {
		const response = await this.#request(`/search/movie?query=${query.name}&year=${query.year}`);
		const results = response.results;

		if (!results.length) return undefined;

		const movie = results[0];

		const externalIds = await this.#request(`/movie/${movie.id}/external_ids`);

		return {
			id: movie.id,
			imdbURL: "https://www.imdb.com/title/" + externalIds.imdb_id,
			name: movie.title,
			description: movie.overview,

			language: movie.original_language,
			releaseDate: movie.release_date,

			backdropUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
		}
	}

	async #request(path: `/${string}`) {
		const response = await fetch(`https://api.themoviedb.org/3${path}`, {
			headers: {
				Authorization: `Bearer ${this.#tmDbApiKey}`
			}
		});

		return response.json();
	}

	async getMeMyTrailers(id: string) {
		let dopeUrl: string = "http://api.themoviedb.org/3/movie/" + id + "/videos?api_key=" + this.#tmDbApiKey;
		let x = fetch(dopeUrl);
		return Response.json(x);
	}
}
