import { Button } from "~/components/ui/button";
import { MultiSelect } from "~/components/ui/multi-select";
import { randomFlashCard } from "~/lib/flashcards"
import { aiFlashcards } from "~/lib/ai"
import { Carousel } from "./carousel";

export default async function MyApp() {
	const cards = await aiFlashcards("spanish", "english", 5);

	return (
		<div className="h-[100dvh] grid place-content-center">
			<Carousel cards={cards} />
		</div>
	);
}