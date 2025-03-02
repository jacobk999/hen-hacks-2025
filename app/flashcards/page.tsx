"use client";

import { getFlashcards } from "~/lib/actions"
import { Carousel } from "./carousel";
import { Nav } from "~/components/ui/nav";
import { PencilScaleCross } from "~/components/icons/pencil-scale-cross";
import { LanguagePicker } from "~/components/ui/language-picker";
import { useActionState, useState } from "react";
import { AiButton } from "~/components/ui/ai-button";
import { NotFound } from "~/components/icons/not-found";

export default function FlashcardsPage() {
	const [knownLanguage, setKnownLanguage] = useState("english");
	const [targetLanguage, setTargetLanguage] = useState("spanish");

	const [state, action, isLoading] = useActionState(async () => {
		const flashcards = await getFlashcards(knownLanguage, targetLanguage);
		return { flashcards }
	}, { flashcards: [] });

	return (
		<div className="flex flex-col gap-4 w-[80%] h-full mx-auto py-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2 [&_svg]:size-8">
					<div className="bg-gradient-to-br from-slate-800/70 to-slate-600/70 border-2 border-slate-900 w-12 h-12 [&>svg]:size-6 flex justify-center items-center rounded-xl [&>svg]:text-white [&>svg]:mix-blend-overlay brightness-125">
						<PencilScaleCross variant="stroke" />
					</div>
					<h1 className="font-header text-4xl uppercase">Flashcards</h1>
				</div>
				<Nav />
			</div>
			<form action={action} className="flex gap-4 items-end">
				<div className="flex flex-col gap-2 grow items-stretch">
					<label className="text-slate-400">Known Language</label>
					<LanguagePicker className="w-full" language={knownLanguage} onLanguageChange={setKnownLanguage} disable={targetLanguage} /></div>
				<div className="flex flex-col gap-2 grow items-stretch">
					<label className="text-slate-400">Target Language</label>
					<LanguagePicker className="w-full" language={targetLanguage} onLanguageChange={setTargetLanguage} disable={knownLanguage} /></div>
				<AiButton type="submit" loading={isLoading}>Generate</AiButton>
			</form>
			<div className="grid place-content-center h-full">
				{state.flashcards.length > 0 ?
					<Carousel cards={state.flashcards} />
					: <NotFound icon={PencilScaleCross}>Select your known and target language to get started</NotFound>}
			</div>

		</div >
	);
}