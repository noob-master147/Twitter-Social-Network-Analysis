package main

func main() {
	cards := newDeck()
	cards.shuffle()
	cards.print()
	// hand, remainingCards := deal(cards, 7)

	// hand.print()
	// remainingCards.print()
}
