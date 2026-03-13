console.log("Hello  Class");
// alert("hello")
// alert("best Javascript Class")
// prompt("How are You?")
// console.log(prompt("How old are you"));

//=========VARIABLES====================
//Variables are containers that hold values
//There are 3 ways to declare Variables
//Var
//LET
//CONST

//VAR: This is the primitive way of declaring variables in javascript.Var is the first way of declaring a variable
var name = "Kelvin"
console.log(name);

var school = "Aptech, UNN"
console.log(school);

//LET /CONST: This is a new way of declaring variables. it came in existence in ECMAScript 2015(ES6)
//They are not global variables instead they are called local variables.
// let allows us to re-use or re-assign values but const doesnt
let food = "Okpa"
console.log(food);

const road = "Okpara Avenue"
console.log(road);

let number = "5"
console.log(number);

let arith = 10+ 10
console.log(arith);
//alert(arith)

var check = "global"
const check2 = "not global"
console.log(check)
console.log(check2)

arith =20+20
console.log(arith);

// numb = 6;
//console.log(numb);

let miracle = "check"
console.log(miracle);

//let fullName = prompt("Please, tell me ur name")
//console.log(fullName);
// alert(fullName)

//DATA TYPES
//Primitive 
//Strings
//Numbers
//Non Primitive
//Array
//Object
//Function

//STRINGS
// let string = 'Hello World' //single quote
// let string = "Hello africa" //double quote
// let string =hello Aptech //Template literal

let say ="I'm a boy"
let sayAgain = 'My dad said"i will make it in life".'
console.log(sayAgain)
console.log(say)

let kelvin = 'My dad\'s friend said, "I will surely make it in life if I leave sporty"' //"\'"

let szobo ="\t fortunately, I won my bet" //"\t" tab
console.log(szobo);

var pascal = "JV is the tallest in the class.\n But he sabi make noise" //"\n" newline
console.log(pascal)

let emma = "Miracle said,\"I will not take my lecturer to Genesis\"." //double quote. //'\"
console.log(emma)

let irene ="c:\\desktop\\lesson\\html_classes\\intro.html" //"\\" backslash
console.log(irene)


//Numbers
// Numbers are data types that represent numeric values either integer or floating point numbers.

//let num =5 //integers
//let num = 20.5 //floating point numbers

//NUMBER OPERATORS
//Operators are symbols used to perform mathematical operations in js. + - × / >< = >= <= %
//ARITHMETIC OPERATORS

let add = 5+ 5
console.log(add); //ADDITION

let sub = 10- 5
console.log(sub); //SUBSTRACTION

let mult = 4* 4
console.log(mult);

let div = 12/2
console.log(div)

let mod = 6%2
console.log(mod) //modulus reminder 6/2 reminder 0

let expo = 2**10
console.log(expo); //exponential

//Assignment operators
//They are used to assign a value to a varaiable eg(=), addition assignment, substraction assignment, division assignment

let assign = 10
console.log(assign);

assign +=5
console.log(assign) //addition assignment add a value and assigns a value to it.

assign -=7
console.log(assign) //substarction assignment

assign *=2
console.log(assign) // multiplication assignment

assign /=4
console.log(assign) // division assignment

assign %= 2
console.log(assign); //modulus assignment

assign **= 2
console.log(assign); //expo assignment
 
//TEMPLATE LITERAL eg ``backtick

//ASSIGNMENT
// let d = 22
// let pi = 3.142
// let r = d/2

// let area = pi * r * r
// console.log(The area of the circle is ${area/100});

// let peri = 2 * pi * r
// console.log(The perimeter of the circle is ${peri/100});

//× / + -

//COMPARISON OPERATORS; used for comparing values.
let a = 10
let b = 20
let c = "10"
let d = "20"

console.log(a ==b); //equal
console.log(a ==c);

console.log(a !=b); // not equal

console.log(a ===c); // strictly equal to

console.log(a !==c); // strictly not equal to

console.log(a > b); //greater than (false)

console.log(a < b); //less than (true)

console.log(a >= b); //greater than or equal to (false)

console.log(a <= b); //less than or equal to (true)

//LOGICAL operators
//They are used to combine conditional statements.
// they are 3 logical operators

let e = 10

let f = 5

//AND(&&): This operator makes sure that the 2 conditions are true for it to be true

console.log(2 && 7< 6); //&& and

// OR( || ): This operator will be true if any of the conditions are true

console.log(2 || 7 < 6); // ||or

//NOT (!): This operator is used when a condition is to maybe reversed

// ============ CONCATENATION ==============
// Is a process of combining or appending two or more strings into a single string. There are two ways we can concatenaten in js:
//1. Using string operator(+)

let myclass = 20
console.log("I have the best set of students in Aptech and we are " + myclass + " in number");

//2. Template literal(`` or backtick)
// we concatenate with template literals using ``. to access a variable within a string, dollar sign($) and curly bracket{} is used to access it.

console.log(`The ${myclass} students in my class are the best in Aptech`);

//Also, template literals are also used to make multiple line strings
console.log(`My name is Jude Nnam. i'm many years old. I love js so much 
that i can't sleep a day without coding in js.   
    Furthermore, I have good friends in school that help me alot. 
One of them is holyboy`);

//BOOLEANS
// This is a type of data type that returns only true or false. They are mostly used in various operations such as logical operations

// NULL
// This is a data type that represents the absence of any object value. It can only have a single value called "null"

let class0 = null
console.log(class0);

let eva;
console.log(eva); //undefined

//BIGINT: This is a data type that represents a large integer value.
// They are created using the Bigint() function or by appending "n"  to the end of an integer value

const bigInt = BigInt(9086754321234567890987654)
console.log(bigInt);

const bigInt2 = 609876444385679095472389n
console.log(bigInt2);


// ============ DATA TYPE CONVERSION =============
// Its a process whereby the data type of a value is changed to another data type

//Implict conversion:
// It is a type of conversion that is done automatically by the programming language
let x = 6
let y = 10.864
let res = x + y
console.log(res);


// Explicit Conversion:
// it is a type of conversion that is done manually the programmer using casting operators or conversion function

// CONVERSION OF STRINGS TO NUMBERS
// 1. PARSEINT() : converting from strings to intergers
let str = "1293742"
console.log(typeof str);

let pars = parseInt(str)
console.log(typeof pars);

//2. NUMBER : does for both
let numInt = Number(str)
console.log(typeof numInt);

// 3. PARSEFLOAT() : from strings to floating point
let strFloat = 3625.456
let parsF = parseFloat(strFloat)
console.log(parsF);

// In the case that the value in the string to be converted is not actually a number, the conversion functions return "NaN(Not a Number)" or "0" to show they are not a number
let human = "human"
console.log(parseFloat(human));

// TYPE COERCION
// its an implicit conversion where by 2 different types of data combine to give a data type

// Converting Number to String
let m = 10
let n = "Messi"
let comb = n + m
console.log(typeof comb); //concatenate (+) string operator

// Converting String to Number
let p = "10"
let resu = p * 2
console.log(typeof resu);

//Converting Boolean to Number
check = true
let finalize = check + 1
console.log(typeof finalize); //true is 1 and false is 0

//============= CONVERTING NUMBERS TO STRINGS =============
// 1. .TOSTRING():
let cate = 7652
console.log(typeof cate);

let cateString = cate.toString() //dot for calling methods
console.log(typeof cateString)

// 2. String(): this is a function
let cateString2 = String(cate)
console.log(typeof cateString2);

// console.log(String(23456))