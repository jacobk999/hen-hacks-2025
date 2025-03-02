export async function randomFlashCard(cards: string[]) {
	return cards[Math.floor(Math.random() * cards.length)];
}
