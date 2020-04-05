package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

//Struct for Book
type Book struct {
	ID     string  `json:"id"`
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
	r.HandleFunc("/api/books/all", getBooks).Methods("GET")
	r.HandleFunc("/api/book/{id}", getBook).Methods("GET")
	r.HandleFunc("/api/book/create", createBook).Methods("POST")
	r.HandleFunc("/api/book/update/{id}", updateBook).Methods("PUT")
	r.HandleFunc("/api/book/delete/{id}", deleteBook).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8000", r))
}

func getBooks(w http.ResponseWriter, r *http.Request) {

}

func getBook(w http.ResponseWriter, r *http.Request) {

}

func createBook(w http.ResponseWriter, r *http.Request) {

}

func updateBook(w http.ResponseWriter, r *http.Request) {

}

func deleteBook(w http.ResponseWriter, r *http.Request) {

}
