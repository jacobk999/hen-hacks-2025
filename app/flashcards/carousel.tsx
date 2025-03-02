"use client";

import { useState } from "react";
import { ChevronLeft } from "~/components/icons/chevron-left";
import { ChevronRight } from "~/components/icons/chevron-right";
import { Button } from "~/components/ui/button";

export function Carousel({ cards }: {
	cards: {
		foreignText: string;
		knownText: string;
	}[]
}) {
	const [index, setIndex] = useState(0);

	return (
		<div className="flex items-center gap-4">
			<Button onClick={() => setIndex((index) => index === 0 ? cards.length - 1 : (index - 1))} size="icon">
				<ChevronLeft variant="stroke" />
			</Button>
			<Card card={cards[index]} />
			<Button onClick={() => setIndex((index) => (index + 1) % cards.length)} size="icon">
				<ChevronRight variant="stroke" />
			</Button>
		</div>
	);
}

function Card({ card }: {
	card: {
		foreignText: string;
		knownText: string;
	}
}) {
	const [flipped, setFlipped] = useState(false);

	return (
		<div onClick={() => setFlipped(flipped => !flipped)} className="w-150 h-80 text-5xl font-semibold font-header">
			<div className="relative w-full h-full transform-3d transition-transform text-center" style={{
				transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
			}}>
				<p className="absolute w-full h-full backface-hidden rounded-xl flex justify-center items-center bg-slate-800">{card.foreignText}</p>
				<p className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl flex justify-center items-center bg-slate-900">{card.knownText}</p>
			</div>
		</div>
	)
}