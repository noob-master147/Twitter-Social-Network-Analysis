package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

// Create a new type of Deck which is a slice of strings
type deck []string

//create a new deck
func newDeck() deck {
	cards := deck{}
	cardSuits := []string{"Spades", "Diamonds", "Clubs", "Hearts"}
	cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six"}
	// , "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"
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

//Deal cards
func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

//convert the deck to string type
func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}
