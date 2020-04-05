package main

import "fmt"

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

func main() {

	alex := person{
		firstName: "John",
		lastName:  "Doe",
		contact: contactInfo{
			email:   "email@gmail.com",
			zipcode: 123456,
		},
	}
	alexPointer := &alex
	alexPointer.updateName("NewAlex")
	alex.print()
}

func (p person) print() {
	fmt.Println("Name: ", p.firstName, p.lastName)
	fmt.Println("Email Id: ", p.contact.email)
	fmt.Println("ZipCode: ", p.contact.zipcode)
}

func (pointerToAlex *person) updateName(newFirstName string) {
	(*pointerToAlex).firstName = newFirstName
}
