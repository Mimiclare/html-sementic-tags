// ========== FUNCTION ================
// Function is a block of code that can be executed multiple times
// Types of Functions
// Built in functions eg console.log function ,number functions
// User functions eg 
// Anonymous functions - doesnt have names, usually done by event listerners
// function used inside a block of code cant be used outside but fuctions outside can be used inside
// ARROW FUNCTIONS
// Function can return values AFTER EXECUTION

function callName(name) {
    console.log(`Hello ${name}`)
}
callName ("Oga k")

callName ("Dominic")

callName ("Oga k")

function tryAdd(a, b) {
    let add = a + b
    console.log(add);
}

tryAdd (2, 5)
tryAdd (10, 20)

function area(length){
    let squ = length * length // function parameters
    console.log(squ);
}

area (10)

function askGender(gender = "male") {
    console.log("Your gender is " + gender)
}

askGender()
askGender("female")

function subtract(x, y) {
    return  x - y
}
let sub = subtract(10, 5)
console.log(sub);

let greet = function(name, gender) {
    console.log("My name is " + name +". Am a good " + gender)
   // alert(My name is ${name} Am a good ${gender})
} 

greet("Pascal", "Boy")

// ARROW FUNCTIONS
let handUp = (num) => {
    let add = 5 + 10
    let genAdd = add + num
    console.log(genAdd);
}
handUp(5)

let checkAge = (age) => {
switch(true) {
    case (age >= 0 && age <= 10):
    console.log("kid");
    break;

    case(age >= 11 && age <= 17): 
    console.log("Teenager");
    break;

    case(age >= 18 && age < 25): 
    console.log("Adolescent");
    break;

    case(age >= 26 && age < 50): 
    console.log("Adult");
    break;
    
    case(age >= 51):
    console.log("old");
    break;

    default:
    console.log("wrong");
    break;
}
}
checkAge(52)
checkAge(100)
checkAge(-4)