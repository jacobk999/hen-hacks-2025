"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { Notebook } from "~/components/icons/notebook";
import { AiButton } from "~/components/ui/ai-button";
import { LanguagePicker } from "~/components/ui/language-picker";
import { MultiSelect } from "~/components/ui/multi-select";
import { getBooks } from "~/lib/actions";
import { Book } from "~/lib/books";

const bookGenres = [
	{ label: "Murder Mystery", value: "murder mystery", color: "bg-red-300/40 border-red-400" },
	{ label: "Political", value: "political", color: "bg-purple-600/40 border-red-800" },
	{ label: "Biography", value: "biography", color: "bg-rose-600/40 border-rose-800" },
	{ label: "Spy Thriller", value: "spy thriller", color: "bg-gray-600/40 border-gray-800" },
	{ label: "How-To", value: "how-to", color: "bg-black/40 border-black" },
	{ label: "Religous", value: "religous", color: "bg-green-600/40 border-green-700" },
	{ label: "Historical Fiction", value: "historical fiction", color: "bg-amber-600/40 border-amber-700" },
	{ label: "Health and Wellbeing", value: "health and wellbeing", color: "bg-cyan-600/40 border-cyan-700" },
	{ label: "Fantasy", value: "fantasy", color: "bg-pink-600/40 border-pink-800" },
	{ label: "Romance", value: "romance", color: "bg-white/40 border-white" },
	{ label: "Sci-Fi", value: "sci-fi", color: "bg-yellow-950/40 border--800" },
	{ label: "Mystery", value: "mystery", color: "bg-fuchsia-200/40 border--800" },
	{ label: "Motivational", value: "motivational", color: "bg-rose-950/40 border-pink-800" },
	{ label: "Sports", value: "sports", color: "bg-lime-950/40 border-pink-800" },
	{ label: "Cooking", value: "cook", color: "bg-slate-900/40 border-pink-800" },
	{ label: "Childrens", value: "childrens", color: "bg-blue-600/40 border-pink-800" }
];

export default function BooksPage() {
	const [genres, setGenres] = useState<string[]>([]);
	const [language, setLanguage] = useState<string>("english");

	const [state, action, isLoading] = useActionState(async () => {
		const resources = await getBooks(genres, language);
		return { resources }
	}, { resources: [] });

	return (
		<div className="flex flex-col gap-4 w-[80%] mx-auto py-4">
			<div className="flex items-center gap-2">
				<div className="bg-gradient-to-br from-slate-800/70 to-slate-600/70 border-2 border-slate-900 w-12 h-12 [&>svg]:size-6 flex justify-center items-center rounded-xl [&>svg]:text-white [&>svg]:mix-blend-overlay brightness-125">
					<Notebook variant="stroke" />
				</div>
				<h1 className="font-header text-4xl uppercase">Books</h1>
			</div>
			<form className="flex items-center gap-4" action={action}>
				<LanguagePicker language={language} onLanguageChange={setLanguage} />
				<MultiSelect
					className="grow"
					placeholder="Select genres"
					onValueChange={(genres) => setGenres(genres)}
					options={bookGenres}
					maxCount={10}
				/>
				<AiButton type="submit" loading={isLoading} />
			</form>
			<div className="flex flex-col gap-4">
				{state.resources.map(book => (
					<BookCard book={book} key={book.id} />
				))}
			</div>
		</div>
	);
}

const COVER_WIDTH = 128;
const COVER_HEIGHT = 197;

function BookCard({ book }: { book: Book }) {
	return (
		<div className="group relative flex rounded-xl overflow-hidden group cursor-pointer">
			<Link href={book.url} className="absolute w-full h-full z-5" />
			<div className="absolute blur-[64px] w-full h-full group-hover:opacity-70 transition-opacity">
				<Image src={book.coverUrl} fill className="object-cover object-center opacity-30" alt={book.name} />
			</div>
			<div className="absolute w-full h-full outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-xl" />
			<div className="relative max-w-[128px] h-fit m-2 rounded-lg overflow-clip ">
				<div className="w-full h-full absolute outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-lg  z-50" />
				<Image src={book.coverUrl} width={COVER_WIDTH} height={COVER_HEIGHT} alt={book.name} />
			</div>
			<div className="flex flex-col gap-2 max-w-10/12 p-2 truncate z-10">
				<div className="flex flex-col">
					<Link href={book.url} className="text-lg font-semibold font-header hover:underline">{book.name}</Link>
					<div className="flex gap-2 ">
						{book.authors.map(author => <p key={author}>{author}</p>)}
					</div>
				</div>
				<p className="text-wrap text-slate-400 group-hover:text-white">{book.description}</p>
			</div>
		</div>
	);
}