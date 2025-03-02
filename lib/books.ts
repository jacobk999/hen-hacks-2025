import type { AiMediaProvider } from "~/lib/common";
import googleBooks from "@googleapis/books";
import { z } from "zod";

export interface Book {
	id: string;
	name: string;
	description: string;
	publishedAt: string;
	pages: number;
	authors: string[];
	cover: string;
	url: string;
}

export interface BookQuery {
	name: string;
	author: string;
}

export class BooksProvider implements AiMediaProvider<BookQuery, Book> {
	#sdk: googleBooks.books_v1.Books;
	#apiKey: string;

	constructor(apiKey: string) {
		this.#sdk = googleBooks.books("v1");
		this.#apiKey = apiKey;
	}

	querySchema() {
		return z.object({ name: z.string(), author: z.string() })
	}

	async getByQuery(query: BookQuery): Promise<Book> {
		const response = await this.#sdk.volumes.list({
			q: `intitle:${query.name} inauthor:${query.author}`,
			auth: this.#apiKey
		});

		const volume = response.data.items[0];


		return {
			id: volume.id,
			name: volume.volumeInfo?.title,
			authors: volume.volumeInfo?.authors,
			cover: volume.volumeInfo?.imageLinks?.thumbnail,
			description: volume.volumeInfo?.description,
			pages: volume.volumeInfo?.pageCount,
			publishedAt: volume.volumeInfo?.publishedDate,
			url: volume.volumeInfo?.infoLink
		};
	}
}
