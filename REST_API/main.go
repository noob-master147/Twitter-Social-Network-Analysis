package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

//Struct for books
type Book struct {
	Id     string  `json:"id"`
	Isbn   string  `json:"isbn"`
	Title  string  `json:"title"`
	Author *Author `json:"author"`
}

//Struct for Author
type Author struct {
	Firstname string `json:"firstname"`
	lastname  string `json:"lastname"`
}

func main() {
	//create a router
	r := mux.NewRouter()
	r.HandleFunc("/api/books", getBooks).Methods("GET")
	r.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	r.HandleFunc("/api/books", createBooks).Methods("POST")
	r.HandleFunc("/api/books{id}", updateBooks).Methods("PUT")
	r.HandleFunc("/api/books{id}", deleteBooks).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", r))
}
