package main

import "fmt"

// Create a new type of Deck which is a slice of strings
type deck []string

//create a new deck
func newDeck() deck {
	cards := deck{}
	cardSuits := []string{"Spades", "Diamonds", "Clubs", "Hearts"}
	cardValues := []string{"Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"}

	for _, suits := range cardSuits {
		for _, values := range cardValues {
			cards = append(cards, values+" of "+suits)
		}
	}
	return cards
}

//print the contents of the deck
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}
