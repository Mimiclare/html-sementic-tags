// let year = prompt("input date of birth")
// let currenYear = 2025
// let age = currenYear - year
// alert(You are ${age}  years old)
// console.log(age);

// let money = prompt("input money borrowed") //principal
// let time = prompt("time of payback in years")

// const rate = 10 //percent

// let I = money //10% 0f the money borrowed
// let calculation = (money*time*rate)/100
// console.log(calculation);

// let SI = money + calculation
// console.log(SI);
// alert(I borrowed ${money} and i will pay back in ${time} years. total amount i will pay is ${SI})

let principal = prompt("put the amount of money u want to remove")
let time = prompt("amount of years u want to payback")
let rate = 10

let SI = (principal * time * rate) /100

let amount = parseFloat(SI) + parseFloat(principal) //parseint || parsefloat converts strings to numbers
alert(`You have made a request to be borrowed #${principal} and pay up in the 
    space of ${time} years. We borrow at a rate of ${rate}%. 
    That means u will pay an interest of #${SI}. Therefore, the total amount you will pay us in 
    this period is #${amount}`)
