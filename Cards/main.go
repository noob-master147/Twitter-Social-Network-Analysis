package main

func main() {
	cards := newDeck()
	cards.saveToFile("New Deck")
	// hand, remainingCards := deal(cards, 7)

	// hand.print()
	// remainingCards.print()
}
