// =============== OBJECTS ==================
// Is a collection of key-value pairs, where each key is a string or symbol and eaxh value can be any data type.
// {
//     name: "Jude"
//     age: 20
// }

// creating using object literal
let profile = {
    name : "Jude Nnam",
    age : 50,
    occupation : "Altar Knight",
    isFair : false
}
console.log(profile)

let prof = ["Jude Nnam", 30, "software eng", false]
console.log(prof);            // arrary

// creating using object constructor
let staff =  new Object()
staff.name = "Dominic"
staff.age = 40
staff.position = "Marketing manager"
console.log(staff)

// Creating object.create()
let drivers = Object.create({})
drivers.name = "Paschal"
drivers.age = 70
drivers.isLicensed = true
console.log(drivers);

// Targeting Object values / Acessing properties of objects
// Dot Notation
console.log(profile.name)
console.log(`${profile.name} is an ${profile.occupation} who is ${profile.age} years old `);
console.log(`${staff.name} is a ${staff.position} who is ${staff.age} years old`)

// Bracket notation
console.log(drivers["age"]);
console.log(`${drivers["name"]} is ${drivers["age"]} years old and he has a ${drivers["isLicensed"]} license`)
console.log("The " + staff["position"] + " is " + staff["name"] + " and he's " + staff["age"] + " years old   " )