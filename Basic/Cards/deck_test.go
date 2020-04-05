package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()
	if len(d) != 16 {
		t.Errorf("Expected Deck of size 16, but got %d", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expected First Card to be Ace of Spades")
	}

	if d[len(d)-1] != "Four of Hearts" {
		t.Errorf("Expected Last card to be Four of Hearts")
	}
}

func TestSaveToFile(t *testing.T) {
	os.Remove("_deckTesting")

	d := newDeck()
	d.saveToFile("_deckTesting")

	loadedDeck := newDeckFromFile("_deckTesting")

	if len(loadedDeck) != 16 {
		t.Errorf("Expected loaded deck to contain 16 cards")
	}

	os.Remove("_deckTesting")
}
