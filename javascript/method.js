//=========== METHOD ==============
// Methods is a block of code that performs a specific task or a set of tasks nd also associated with objects.
// Types
// 1. Instance 
// 2. Static
// 3. constructor
// 4.

//============ STRING METHOD ===========
// 1. Concat():
// used to concatenate or join
let str1 = "Best class"
let str2 = "in the world"
console.log(str1.concat(str2));

// 2. charAt():
// Return the character at the specified index
let world = "world"
console.log(world.charAt(0));

// 3. toLowerCase():
// it changes strings to lowwecsae
world = "WORLD"
console.log(world.toLocaleLowerCase());


// 4. toUpperCase():
world = "world"
console.log(world.toLocaleUpperCase());

// 5. includes():
// Returns true if the string contains the specified value
let hi = "hello"
console.log(hi.includes("o"));

// 6. endsWith():
// Returns true if the string ends with the specified value
let judes = "Hello World"
console.log(judes.endsWith("ld"));

// 7. startsWith():
//
let contacts = "+234 8645 436 4236"
console.log(contacts.startsWith("001"));

// 8. replace():
// It replaces the first occurence of the specified value with the specified replacement
let concact2 = "0 8022 968 386"
console.log(concact2.replace("0", "+234"));

// 9. replaceAll():
// Replaces all occurences of the specified value with the specificed replacement
let str = "hello world world world" 
console.log(str.replaceAll("world", "class"));

// 10. trim():
// It removes whitespaces from both ends of string
str = "      hello!    "
console.log(str.trim());

// 11. splite():
// splits string into an array of substrings based on a specified seperator
let str4 = "apple, banana, guava, paw-paw"
console.log(str4);

console.log(str4.split(","));
console.log(str4.split(",", 2));

// 12. substring():
// Returns a subvest of a string
let Nnam = "jude Nnam onye choir"
console.log(Nnam.substring(5, 9));

// 13. indexOf():
// Returns the index of first occurence of the specified value
let pasc = "hello"
console.log(pasc.indexOf("l"));

// 14. lastIndexOf():
// Returns the index of last occurence of the specified value

console.log(pasc.lastIndexOf("l"));

let oppres = "oppression"
console.log(oppres.indexOf("o"));
console.log(oppres.lastIndexOf("o"));

// 15. length():
// Returns the lengthof  the string
let domi = "hello"
let domiSub = domi.substring(0,4)
console.log(domiSub);

console.log(domiSub.length);

// 16. padstart():
// pads the string with the specified string to the specified length from the start
console.log(domi.padStart(10, "*"));


// 17. padEnd():
// pads the string with the specified string to the specified length from the end
console.log(domi.padEnd(10,"*"));

// 18. title():
// capitalize first letter of each word


// 19. repeat
// 20. toString
// 21. 


// ARRAY METHOD
//1. Concat():
// it is used to concatenate or join 2 or more arrarys
let luxCar = ["ferrai", "bugatti", "range rover", "bmw"]
let manCar = ["camry", "corolla", "benz c300"]

let cars = luxCar.concat(manCar)
console.log(cars)

// 2. entries
// returns an iterator containing key-value pairs for each element in the arrary
let house = ["penthouse", "mud", "bungalow"]
console.log([...house.entries()]); //
console.log([...house.entries()]); //.... spread operator

// 3. every():
// Returns true if all elements in the arrary pass the implemented function provided

let ages = [20, 25, 35, 67, 18]
console.log(ages.every(x => x >= 18)); // or age

//4. fill():
// it fills all elements in the arrary with a static value
console.log(ages.fill(0));

// 5. filter():
// Return new arrary containing all elements that pass the test implemented by the function provided
let menAge = [28, 30, 15, 27, 10]
let filtAge = menAge.filter(age => age <= 18)
console.log(filtAge);
console.log(menAge.filter(age => age <= 18));

let students = ["JV", "Ugo", "Cathe", "Holy Boy"]
let filtStu = students.filter(student => student.includes("o"))
console.log(filtStu)

// 6 . find():
// Returns the first element in the arrary that satisfies that provided funtion. it returns the first element that passed that function
let findStu = students.find(student => student.includes("o"))
console.log(findStu);

// 7. findIndex():
// Returns the index of the first element in the array that pass the provided function
let findIndexStu = students.findIndex(student => student.includes("o"))
console.log(findIndexStu);

// 8. forEach():
// Calls a function for each element in the arrary
students.forEach(student => console.log(student));

let ful = document.getElementById("fb")
let footballers = ["Messi", "Ronaldo", "Rice", "Vinicius", "Haaland", "Yamal"]
footballers.forEach(player => {
    const li = document.createElement("li")
    li.textContent = player
    ful.appendChild(li)
})
// 9. include():
// Returns true if the arrary contains the specified value
let sits = [2,4,8,20,50]
console.log(sits.includes(20));

// 10. indexOf():
// Returns the index of the first occurence of the specified value
let alpha = ["a", "d", "r", "j", "h", "d"]
console.log(alpha.indexOf("d"));

// 11. lastIndexof():
// Returns the index of the last occurennce of the specified value
console.log(alpha.lastIndexOf("d"));

// 12. join():
//Returns a string containing all elements in the arrary joined by the specified sepeartor
console.log(alpha.join(","));

// 13. keys
// Returns an iterator containing the keys for each of the element in the arrary
let dogs = ["ekuke", "German Shephard", "Pitbull"]
console.log([...dogs.keys()]);

// 14. map():
//Returns the new arrary containing the results of applying the provided function to each element in the arrary
let numb = [2, 4, 6, 8]
console.log(numb.map(number => number * 2));

// 15. pop():
// Removes the last element from the array and returns it
console.log(numb.pop());
console.log(numb);

// 16. push():
// Adds one or more elements tot the end of the arrary
console.log(numb.push(15, 30));
console.log(numb);

// 17. reverse():
// Reverse the order of the elements in the arrary
let toothPaste = ["Oral B", "Close up", "Agnes nwa mma", "Sensodyne", "Rodent"]
console.log(toothPaste.reverse());

// 18. shift():
// Removes the first element in the arrary and returns it
console.log(toothPaste.shift());
console.log(toothPaste);

// 19. Unshift():
// Adds one or more eleemnets to the beginning of an arrary
console.log(toothPaste.unshift("Charcoal", "Colgate"));
console.log(toothPaste);

// 20. sort():
// sorts the elements of the arrary in place and returns a sorted arrary

console.log(toothPaste.sort())

// OBJECT METHODS
// 1. object.keys():
// Returns an arrary of the object's own property names(keys)
const person = { name: "Alice", age: 25 };
console.log(Object.keys(person)); 
// Output: ["name", "age"]

//2. Object.values():
// Retuen an arrary of the object's own values
console.log(Object.values(person)); 
// Output: ["Alice", 25]

// 3. Object.entries
// Returns an arrary of [key, value] pairs
console.log(Object.entries(person)); 
// Output: [["name", "Alice"], ["age", 25]]

// 4. Object.assign
// Copies properties from one or more objects into a target object.
const additionalInfo = { city: "Paris" };
const updatedPerson = Object.assign({}, person, additionalInfo);
console.log(updatedPerson); 
// Output: { name: "Alice", age: 25, city: "Paris" }

// 5. Object.create()
// Creates a new object with the specified prototype.
const animal = {
    speak() {
      console.log("Animal sound");
    }
  };
  
  const dog = Object.create(animal);
  dog.speak(); 
  // Output: "Animal sound"

//6. Object.freeze
// prevents any changes to any object
const frozenObj = Object.freeze({ a: 1 });
frozenObj.a = 2;  // This won't change the value
console.log(frozenObj.a); 
// Output: 1
let mimi = Object.freeze({a: 9});
mimi.a = 7;
console.log(mimi.a);

// 7. Object.seal
// Prevents adding/removing properties, but allows modifying existing ones.
const sealedObj = Object.seal({ a: 1 });
sealedObj.a = 2;       // OK
sealedObj.b = 3;       // Ignored
delete sealedObj.a;    // Ignored
console.log(sealedObj); 
// Output: { a: 2 }

// 8. Object.hasOwn() (or hasOwnProperty)
// Checks if a property exists directly on the object (not inherited)
console.log(Object.hasOwn(person, "name")); 
// Output: true
console.log(person.hasOwnProperty("age"));  
// Output: true

// 9.  Object.defineProperty()
// Adds or modifies a property with descriptors (e.g., making it read-only).
const user = {};
Object.defineProperty(user, "id", {
  value: 123,
  writable: false
});
user.id = 456;  // Ignored
console.log(user.id); 
// Output: 123

// 10. Object.getPrototypeOf():
// returns the prototype of the specified object
let per = {name: "Alex"};
let perProto = Object.getPrototypeOf(per);
console.log(perProto === Object.prototype);