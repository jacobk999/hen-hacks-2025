import Image from "next/image";
import { Button } from "~/components/ui/button";
import { MultiSelect } from "~/components/ui/multi-select";
import { createCards, quizYou } from "~/lib/flashcards"
import { aiFlashcard } from "~/lib/ai"

export default async function MyApp() {
	//ai card hashmap

	//fill cards
	let phrases = await aiFlashcard("spanish", "english", 5);
	//once done
	let x = createCards(phrases);

	//quiz card
	let s: string = quizYourMom(x);
	let s1 = "";//english
	let s2 = "";//stupid language
	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === '@') {
			s2 = s.substring(i + 1);
			break;
		}
		s1 += s.charAt(i);
	}

	return (
		<div>
			<h1>FLASH CARDS WEE WOO WEE WOO</h1>
			<h2>{s1}</h2>
			<Button>Flip card balls</Button>
		</div>
	);
}