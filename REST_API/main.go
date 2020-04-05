package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

//Book Struct
type Book struct {
	ID     string  `json:"id"`
	ISBN   string  `json:"isbn"`
	Title  string  `json:"title"`
	Author *Author `json:"author"`
}

//Author Struct
type Author struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

var books []Book

func main() {

	books = append(books, Book{
		ID:    "1",
		ISBN:  "458234835",
		Title: "Death on Nile",
		Author: &Author{
			Firstname: "Nancy",
			Lastname:  "Drew",
		},
	})

	books = append(books, Book{
		ID:    "2",
		ISBN:  "458478835",
		Title: "Fault in our Stars",
		Author: &Author{
			Firstname: "John",
			Lastname:  "Doe",
		},
	})

	//create a router
	r := mux.NewRouter()
	r.HandleFunc("/api/book/all", getBooks).Methods("GET")
	r.HandleFunc("/api/book/{id}", getBook).Methods("GET")
	r.HandleFunc("/api/book/create", createBook).Methods("POST")
	r.HandleFunc("/api/book/update/{id}", updateBook).Methods("PUT")
	r.HandleFunc("/api/book/delete/{id}", deleteBook).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", r))
}

func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)

}

func getBook(w http.ResponseWriter, r *http.Request) {

}

func createBook(w http.ResponseWriter, r *http.Request) {

}

func updateBook(w http.ResponseWriter, r *http.Request) {

}

func deleteBook(w http.ResponseWriter, r *http.Request) {

}
