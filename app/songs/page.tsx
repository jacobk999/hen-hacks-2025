"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { MusicBeamNote } from "~/components/icons/music-beam-note";
import { AiButton } from "~/components/ui/ai-button";
import { LanguagePicker } from "~/components/ui/language-picker";
import { MultiSelect } from "~/components/ui/multi-select";
import { getSongs } from "~/lib/actions";
import { Song } from "~/lib/songs";

const songGenres = [
	{ label: "Pop", value: "pop", color: "bg-red-300/40 border-red-400" },
	{ label: "Phonk", value: "phonk", color: "bg-purple-600/40 border-red-800" },
	{ label: "Rap", value: "rap", color: "bg-rose-600/40 border-rose-800" },
	{ label: "Rock", value: "rock", color: "bg-gray-600/40 border-gray-800" },
	{ label: "Metal", value: "metal", color: "bg-black/40 border-black" },
	{ label: "Classical", value: "classical", color: "bg-green-600/40 border-green-700" },
	{ label: "80's", value: "80's", color: "bg-amber-600/40 border-amber-700" },
	{ label: "Synth-Pop", value: "synth-pop", color: "bg-cyan-600/40 border-cyan-700" },
	{ label: "Soul", value: "soul", color: "bg-pink-600/40 border-pink-800" },
	{ label: "Country", value: "country", color: "bg-white/40 border-white" },
	{ label: "Pyschadellic", value: "pyschadellic", color: "bg-yellow400/40 border-yellow500" },
	{ label: "Jazz", value: "jazz", color: "bg-blue-800/40 border-blue-800" },
	{ label: "Classic Rock", value: "classic rock", color: "bg-yellow-950/40 border--800" },
	{ label: "Hip-Hop", value: "hip-hop", color: "bg-fuchsia-200/40 border--800" },
	{ label: "R&B", value: "r&b", color: "bg-rose-950/40 border-pink-800" },
	{ label: "Folk", value: "foulk", color: "bg-lime-950/40 border-pink-800" },
	{ label: "Punk", value: "punk", color: "bg-slate-900/40 border-pink-800" },
	{ label: "Blues", value: "blue", color: "bg-blue-600/40 border-pink-800" }



];

export default function SongsPage() {
	const [genres, setGenres] = useState<string[]>([]);
	const [language, setLanguage] = useState<string>("english");

	const [state, action, isLoading] = useActionState(async () => {
		const resources = await getSongs(genres, language);
		return { resources }
	}, { resources: [] });

	return (
		<div className="flex flex-col gap-4 w-[80%] mx-auto py-4">
			<div className="flex items-center gap-2">
				<div className="bg-gradient-to-br from-slate-800/70 to-slate-600/70 border-2 border-slate-900 w-12 h-12 [&>svg]:size-6 flex justify-center items-center rounded-xl [&>svg]:text-white [&>svg]:mix-blend-overlay brightness-125">
					<MusicBeamNote variant="stroke" />
				</div>
				<h1 className="font-header text-4xl uppercase">Songs</h1>
			</div>
			<form className="flex items-center gap-4" action={action}>
				<LanguagePicker language={language} onLanguageChange={setLanguage} />
				<MultiSelect
					className="grow"
					placeholder="Select genres"
					onValueChange={(genres) => setGenres(genres)}
					options={songGenres}
					maxCount={10}
				/>
				<AiButton type="submit" loading={isLoading} />
			</form>
			<div className="flex flex-col gap-4">
				{state.resources.map(song => (
					<SongCard song={song} key={song.id} />
				))}
			</div>
		</div>
	);
}

const COVER_WIDTH = 640;
const COVER_HEIGHT = 640;

function SongCard({ song }: { song: Song }) {
	return (
		<div className="group relative flex rounded-xl overflow-hidden group cursor-pointer">
			<Link href={song.url} className="absolute w-full h-full z-5" />
			<div className="absolute blur-[64px] w-full h-full group-hover:opacity-70 transition-opacity">
				<Image src={song.coverUrl} fill className="object-cover object-center opacity-30" alt={song.name} />
			</div>
			<div className="absolute w-full h-full outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-xl" />
			<div className="relative max-w-[160px] m-2 rounded-lg overflow-clip">
				<div className="w-full h-full absolute outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-lg  z-50" />
				<Image src={song.coverUrl} width={COVER_WIDTH / 4} height={COVER_HEIGHT / 4} alt={song.name} />
			</div>
			<div className="flex flex-col justify-center max-w-3/5 p-2 truncate z-10">
				<div className="flex gap-2">
					<Link href={song.url} className="text-lg font-semibold font-header hover:underline">{song.name}</Link>
					{song.isExplicit && <div>E</div>}
				</div>
				<Link href={song.album.url} className="text-slate-400 hover:underline">{song.album.name}</Link>
				<div className="flex gap-2 text-slate-400">
					{song.artists.map(artist => <Link href={artist.url} key={artist.id} className="hover:underline">{artist.name}</Link>)}
				</div>
			</div>
		</div>
	);
}