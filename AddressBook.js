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


    
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Name is Incorrect!"    
        }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "LastName is Incorrect!" 
    }
    set address(address) {
        let nameRegex = RegExp('^[A-Z][a-z][0-9]$');
        if (nameRegex.test(address))
            this._address = address;
        else throw "Address is Incorrect!" 
    }
    set city(city) { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(city))
            this._city = city;
        else throw "CityName is Incorrect!" 
    }
    set state(state) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(state))
            this._state = state;
        else throw "StateName is Incorrect!" 
    }
    set zip (zip) {
        let nameRegex = RegExp('^[0-9]*$');
        if (nameRegex.test(zip))
            this._zip = zip;
        else throw "zipcode is Incorrect!" 
    }
    set phoneNumber(phoneNumber) {
        let nameRegex = RegExp('^[0-9]*$');
        if (nameRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phonr Number is Incorrect!" 
    }
    set email(email) {
        let nameRegex = RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
        if (nameRegex.test(email))
            this._email = email;
        else throw "Email is Incorrect!" 
    }


    //method
    toString() {
        return "firstName: "+this.firstName +"LastName: "+this.lastName+"Address: "+this.address+"City: "+this.city+" state: "+this.state+
        "Zip: "+this.zip+" PhoneNumber: "+this.phoneNumber+" email: "+this.email;
    }
}

let addressBook = new AddressBook("Vamsi","Krishna","16/203-D","SriKalahasti","AndhraPradesh","517644","9581771469","krishnavamsi165@gmail.com");
console.log(addressBook);

const prompt = require("prompt-sync")();




