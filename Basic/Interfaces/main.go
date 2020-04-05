package main

import "fmt"

type bot interface {
	getGreeting() string
}

type englishBot struct{}
type spanishBot struct{}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func (englishBot) getGreeting() string {
	//VERY custom loging for english
	return "Hi There!"
}

func (spanishBot) getGreeting() string {
	//VERY custom loging for spanish
	return "Hola"
}

//
func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}
