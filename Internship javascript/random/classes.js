//way of naming javascript
let firstName = "Adam";
// class
class Company{
    constructor(name, country) {
           this.name = name,
           this.country =country
 
    }
}
var telsa = new Company("Telsa", "USA");
console.log(telsa)
class ChampionCountry{
    constructor(country, dialingCode) {
        this.country = country,
        this.dialingCode = dialingCode

    }
}
var usa = new ChampionCountry("America", 10001)
console.log(usa)
class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
let motun = new Person("Motunrayo", "Adeneye")
console.log(motun);
console.log(motun.getFullName())
