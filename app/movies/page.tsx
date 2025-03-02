"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { Film } from "~/components/icons/flim";
import { NotFound } from "~/components/icons/not-found";
import { AiButton } from "~/components/ui/ai-button";
import { LanguagePicker } from "~/components/ui/language-picker";
import { MultiSelect } from "~/components/ui/multi-select";
import { Nav } from "~/components/ui/nav";
import { getMovies } from "~/lib/actions";
import type { Movie as MovieCard } from "~/lib/movies";


const movieGenres = [
	{ label: "Comedy", value: "comedy", color: "bg-yellow-600/40 border-yellow-700" },
	{ label: "Thriller", value: "thriller", color: "bg-red-600/40 border-red-800" },
	{ label: "Horror", value: "horror", color: "bg-red-600/40 border-red-800" },
	{ label: "Documentary", value: "documentary", color: "bg-gray-600/40 border-gray-600" },
	{ label: "Sci-Fi", value: "sci-fi", color: "bg-green-600/40 border-green-700" },
	{ label: "Fantasy", value: "fantasy", color: "bg-amber-600/40 border-amber-700" },
	{ label: "Action", value: "action", color: "bg-cyan-600/40 border-cyan-700" },
	{ label: "Romance", value: "romance", color: "bg-pink-600/40 border-pink-800" }
];

export default function MoviesPage() {
	const [genres, setGenres] = useState<string[]>([]);
	const [language, setLanguage] = useState<string>("english");

	const [state, action, isLoading] = useActionState(async () => {
		const resources = await getMovies(genres, language)
		return { resources }
	}, { resources: [] });

	return (
		<div className="flex flex-col gap-4 w-[80%] h-full mx-auto py-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2 [&_svg]:size-8">
					<div className="bg-gradient-to-br from-slate-800/70 to-slate-600/70 border-2 border-slate-900 w-12 h-12 [&>svg]:size-6 flex justify-center items-center rounded-xl [&>svg]:text-white [&>svg]:mix-blend-overlay brightness-125">
						<Film variant="stroke" />
					</div>
					<h1 className="font-header text-4xl uppercase">Movies</h1>
				</div>
				<Nav />
			</div>
			<form className="flex items-center gap-4" action={action}>
				<LanguagePicker language={language} onLanguageChange={setLanguage} />
				<MultiSelect
					className="grow"
					placeholder="Select genres"
					onValueChange={(genres) => setGenres(genres)}
					options={movieGenres}
					maxCount={10}
				/>
				<AiButton type="submit" loading={isLoading} />
			</form>
			{state.resources.length > 0 ? <div className="flex flex-wrap gap-4">{state.resources.map(movie => (
				<MovieCard movie={movie} key={movie.id} />
			))}</div> : <NotFound icon={Film}>Select movie genres to get started</NotFound>}
		</div>
	);
}

const COVER_WIDTH = 500;
const COVER_HEIGHT = 750;

function MovieCard({ movie }: { movie: MovieCard }) {
	return (
		<Link href={movie.imdbURL} className="overflow-clip group relative flex flex-col max-w-[167px] rounded-xl">
			<div className="w-full h-full absolute outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-xl z-50" />
			<Image src={movie.posterUrl} width={COVER_WIDTH / 3} height={COVER_HEIGHT / 3} alt={movie.name} />
			<div className="-bottom-30 group-hover:bottom-0 duration-500 transition-all ease-in-out absolute bg-slate-800/70 backdrop-blur-md w-full text-center p-2 font-medium resize-none">
				<p>{movie.name}</p>
			</div>
		</Link>
	);
}
