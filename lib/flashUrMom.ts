import { readFileSync, writeFileSync, createReadStream } from 'node:fs';
import readline from "node:readline";
import { join } from 'node:path';

//Generate Flash Cards
//methodCallHere()
export function createCards(card: Map<string, string>) {
	let notTemp: string[] = [];
	let x: number = 0;
	for (const [key, value] of card.entries()) {
		notTemp.push(`${key}@${value}`);
		x++;
	}
}
export async function quizYourMom(cards: string[]) {
	let x: number = Math.floor(Math.random() * (cards.length + 1));
	return cards[x];
}
