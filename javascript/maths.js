// 1. Math.abs():
// Get the absolute value of a number
console.log(Math.abs(-6));

// 2. Maths.ceil():
// Rounds a number up to the nearest interger
console.log(Math.ceil(5.4));
console.log(Math.ceil(5.6));
console.log(Math.ceil(5.0));

// 3. Math.floor():
// Rounds a number down to the nearest interger
console.log(Math.floor(4.7));

// 4. Math.round():
// Rounds a number to its nearest interger
console.log(Math.round(4.3));
console.log(Math.round(4.9));

// 5. Math.max
// Returns the maximum value of a set of numbers
console.log(Math.max(2,4,9,4,10,3));

// 6. Math.min
// Returns the min value of a set of numbers
console.log(Math.min(2,4,9,4,10,3));

// 7. MATH.power
// Raises a number to a power
console.log(Math.pow(4, 3));

// 8. Math.random
// it generates randoms numbers btw 0 and 1
console.log(Math.random());

// 9. Math.sqrt():
// it gets the square root of a number
console.log(Math.sqrt(169));

// 10. Math.log():
// is used to get the natural log of a number
console.log(Math.log(10));

// 11. Math.log10():
// To get the base 10 log of a number
console.log(Math.log10(20));

// 12. Math.PI
console.log(Math.PI);

//13. Math.sin():
console.log(Math.sin(30));

//14. Math.cos():
console.log(Math.cos(40));

//13. Math.tan():
console.log(Math.tan(10));

// =================DATE METHODS ====================
let fullDate = Date.now()
console.log(fullDate);

// let currentDate = new Date()
// console.log(currentDate);

let currentDateTime = new Date()
console.log(currentDateTime);

let hour = currentDateTime.getHours()
console.log(hour); // current hour

let minute = currentDateTime.getMinutes()
console.log(minute); // current minute

let second = currentDateTime.getSeconds()
console.log(second);

let milisecond = currentDateTime.getMilliseconds()
console.log(milisecond);

let date = currentDateTime.getDate()
console.log(date);

let day = currentDateTime.getDay()
console.log(day);

let month = currentDateTime.getMonth()
console.log(month);

let fullYear = currentDateTime.getFullYear()
console.log(fullYear);

let daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is ${daysWeek[day]}`)

let months = ["january", "feburary", "march", "april", "may"]
console.log(`This month is ${months[month]}`)