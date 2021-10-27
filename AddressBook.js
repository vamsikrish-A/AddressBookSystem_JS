console.log("Welcome to AddressBook System.")
/* -------UC1-------
Ability to create a Address Book
Contact with first and last names,
address, city, state, zip, phone number
and email...
*/


class AddressBook {
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor..
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    //getters and setters...
    get firstName () {return this._firstName;}
    get lastName () {return this._lastName;}
    get address() {return this._address;}
    get city() { return this._city; }
    get state () { return this._state; }
    get zip () { return this._zip; }
    get phoneNumber() { return this._phoneNumber; }
    get email() { return this._email; }


    
    set firstName(firstName) {this._firstName = firstName;}
    set lastName(lastName) {return this._lastName = lastName;}
    set address(address) {this._address = address; }
    set city(city) { this._city = city; }
    set state(state) { this._state = state; }
    set zip (zip) { this._zip = zip;}
    set phoneNumber(phoneNumber) { this._phoneNumber = phoneNumber;}
    set email(email) { this._email = email; }


    //method
    toString() {
        return "firstName: "+this.firstName +"LastName: "+this.lastName+"Address: "+this.address+"City: "+this.city+" state: "+this.state+
        "Zip: "+this.zip+" PhoneNumber: "+this.phoneNumber+" email: "+this.email;
    }
}

let addressBook = new AddressBook("Vamsi","Krishna","16/203-D","SriKalahasti","AndhraPradesh","517644","9581771469","krishnavamsi165@gmail.com");
console.log(addressBook);

const prompt = require("prompt-sync")();




