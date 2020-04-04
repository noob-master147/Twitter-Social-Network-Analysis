package main

import "testing"

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
