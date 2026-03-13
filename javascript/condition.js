// =========== CONDITIONAL STATEMENT =============
// Conditional statements are statemnents used in executing different block of codes based on certain conditions.
// Types
// 1. IF STATEMENT
// 2. IF ELSE STATEMENT
// 3. IF ELSE IF ELSE
// 4. SWITCH CASE

// =========== IF STATEMENTS ===========
// SYNTAX:
// if (condition) {
    // block of code
// }
let obi = "girl"

if (obi == "boy") {
    console.log("Obi is a boy");

}

let cate = "wig seller"
if (cate == "wig seller") {
    console.log("Cate sells wig in large quantity.");
    console.log("Cate doesnt sell sponge as wig.");
}

let a = 100
if (a > 0) {
    let b = a + 50
    console.log(b);
}

// IF ELSE STATEMENT :

let jv = 70
if(jv < 50) {
    console.log("JV is truly itiboribo")
} else {
    console.log("Ugochukwu, JV is not itiboribo")
}

let kk = 30
if(kk < 50) {
    console.log("kk is truly itiboribo")
} else {
    console.log("Ugochukwu, kk is not itiboribo")
}

let score = 60
let time = "pm"
if (time == "am") {
     score += 10
     console.log(score);
} else {
    score -= 10
    console.log(score);
}

// !isNaN IA A NUMBER
// NaN IS NOT A NUMBER

// ====================== ASSIGNMENT ===========================
// let intro = alert("Welcome to Sportybet")
// let yrBirth = prompt("Please dear, Input your year of birth")
// let age = 2025 - yrBirth

// if(yrBirth == ""){
//     alert("Please,Fill in the form")
//     yrBirth = prompt("Please dear, Input your year of birth ")
// }else{
//     if (age >= 18) {
//         let fullname = prompt("What is your name")
//         let genderBet = prompt("What is ur gender")
//         let password = prompt("Put your password. It must be only numerals ")
//         if (password != "") {
//             if (!isNaN(password)) {
//                 alert("Logged in successfully")
//                 let username = fullNameBet + genderBet
//                 alert(Your username is ${username})
//             } else {
//                 alert("Your password is not a number")
//                 let password = prompt("Put your password. It must be only numerals ")
//                 if (!isNaN(password)) {
//                     alert("Logged in successfully")
//                     let username = fullNameBet + genderBet
//                     alert(Your username is ${username})
//                 }else{
//                     alert("Your passsword is not a number")
//                 }
//             }                                                                            
//         }else{
//             alert("Your password field is empty")
//         }
        
//     }else{
//         alert("Please,we can't accept you cause you're under the age of 18")
//     }
// }



// IF ELSE IF ELSE STATEMENT
// SYNTAX
// if (condition 1) {
//     block of code
// } else if (condition 2) {
//     block of code
// } else {
//     final block of
// }

score = 90
if (score > 100) {
    console.log("You're lying,scores don't pass 100")
}else if (score >= 75) {
    console.log("Your grade is A");
}else if(score >= 65){
    console.log("Your grade is B");
}else if (score >= 55) {
    console.log("Your grade is C");
}else if(score >= 50){
    console.log("Your grade is D");
}else if (score >= 45) {
    console.log("Your grade is E");
}else if(score >= 0){
    console.log("Your grade is F");
}else{
    console.log("You must be cheating")
}

// INCREMENTATION
// INCREMENT && DECREMENT
// To add things to alrready existing value eg substraction and addition assignment

//=========== SWITCH CASE ===========
// SYNTAX:
// switch(expression){
//     case value1:
//         // code to exexcute ;
//         break
//     case value2:
//         // code to exexcute ;
//         break;
//     default:
//         // code to exexcute when no case is true;
//         break;

// }

// let day = prompt("Put the number of the day")
// // let day = 1

// switch (day) {
//     case 1:
//         alert("Today is sunday, hope you went to church")

//     case 2:
//         alert("Today is Monday")
//         break;
        
//     case 3:
//         alert("Today is Tuesday")  
//         break;
        
//     case 4:
//         alert("Today is Wednesday")
//         break;

//     case 5:
//         alert("Today is Thursday")  
//         break; 
            
//     case 6:
//         alert("Today is Friday")

//     case 7:
//         alert("Today is Saturday")

//     default:
//         ("Pick a valid number,thanks")    

// }


let hour = 6

switch (true) {
    case (hour >= 0 && hour < 12): // 12pm and 12am
    console.log("Good morning dear");
    break;

    case(hour >= 12 && hour < 16): // 12pm and 4pm
    console.log("Good afternoon dear");
    break;

    case(hour >= 17 && hour < 24): // 5pm and 12am
    console.log("Good night dear");
    break;

    default:
        console.log("You just fabricated your hour");
        break;

    
}
// let bet = alert(" Welcome to Sportybet")
// let year = prompt("input date of birth")
// let currenYear = 2025
// let age = currenYear - year

// if(age < 18) {
//     alert(" You are Not Eligible to Bet ")
// } else {
//     alert("You Are Eligible, pls fill the the form below")
// }

// let name = prompt("input names")
// let gender = prompt("input gender")

// let password = prompt("Enter ur password in numbers only")
// console.log(password);
// let Numeric = 0 < 9 || 0 > 9
// // console.log(Numeric)
// if ( Numeric === password) {
//     alert(" You have logged into this site successfully ")
// } else{
//     alert("Pls input only numbers");
    
//     password = prompt("please re-enter your password using only numbers")
//     console.log(password);
//     if(Numeric === password){
//         alert("password correct");
//     } else{
//         alert("Are u daft??")
//     }
// }
    
// if (/^\d+$/.test(password)) { // /^[0-9]+$/
//     alert("You are logged into the site successfully!");
// } else {
//     alert("input only numbers.");
    
//     password = prompt("Please re-enter your password using ONLY numbers:");
    
//     if (/^\d+$/.test(password)) {
//         alert("Logged into the site successfully!");
//     } else {
//         alert("Are you daft?");
//     }
// }
// !isNaN IA A NUMBER
// NaN IS NOT A NUMBER

// ====================== ASSIGNMENT ===========================
// let intro = alert("Welcome to Sportybet")
// let yrBirth = prompt("Please dear, Input your year of birth")
// let age = 2025 - yrBirth

// if(yrBirth == ""){
//     alert("Please,Fill in the form")
//     yrBirth = prompt("Please dear, Input your year of birth ")
// }else{
//     if (age >= 18) {
//         let fullname = prompt("What is your name")
//         let genderBet = prompt("What is ur gender")
//         let password = prompt("Put your password. It must be only numerals ")
//         if (password != "") {
//             if (!isNaN(password)) {
//                 alert("Logged in successfully")
//                 let username = fullNameBet + genderBet
//                 alert(Your username is ${username})
//             } else {
//                 alert("Your password is not a number")
//                 let password = prompt("Put your password. It must be only numerals ")
//                 if (!isNaN(password)) {
//                     alert("Logged in successfully")
//                     let username = fullNameBet + genderBet
//                     alert(Your username is ${username})
//                 }else{
//                     alert("Your passsword is not a number")
//                 }
//             }                                                                            
//         }else{
//             alert("Your password field is empty")
//         }
        
//     }else{
//         alert("Please,we can't accept you cause you're under the age of 18")
//     }
// }

// let intro = alert("Welcome to this event site")
// let currency = prompt("Input currency you will use for payment")
// let money = prompt("enter amount")

// let naira = 1

// let dollar = 1700

// let euros = 2600

// let pounds = 2300



// if (currency === "naira") {
//     console.log(money);
//       if (money >= 2000 && money < 5000){
//         console.log("regular ticket")
//     }else if (money >= 5000 && money < 20000){
//         console.log("Big boy regular")
//     }else if (money >= 20000 && money < 200000){
//         console.log("VIP")
//     }else if (money >= 200000 && money < 1000000){
//        console.log("VVIP")
//     }else if (money >= 1000000 && money < 9000000){
//         console.log("Prominent people")
//     }else if(money >= 10000000 && money < 90000000){
//         console.log("Politician")
//     }else if (money > 100000000){
//         console.log("Celebrity")
//     }else{
//         console.log("odogwu")
//     }
// }else if(currency === "dollar"){
//     let cal = money/dollar
//     console.log(cal);
//     if (money >= 2000 && money < 5000){
//         console.log("regular ticket")
//     }else if (money >= 5000 && money < 20000){
//         console.log("Big boy regular")
//     }else if (money >= 20000 && money < 200000){
//         console.log("VIP")
//     }else if (money >= 200000 && money < 1000000){
//        console.log("VVIP")
//     }else if (money >= 1000000 && money < 9000000){
//         console.log("Prominent people")
//     }else if(money >= 10000000 && money < 90000000){
//         console.log("Politician")
//     }else if (money > 100000000){
//         console.log("Celebrity")
//     }else{
//         console.log("odogwu")
//     }
// }else if(currency === "euros"){
//     let cal = money/euros
//     console.log(cal);
//     if (money >= 2000 && money < 5000){
//         console.log("regular ticket")
//     }else if (money >= 5000 && money < 20000){
//         console.log("Big boy regular")
//     }else if (money >= 20000 && money < 200000){
//         console.log("VIP")
//     }else if (money >= 200000 && money < 1000000){
//        console.log("VVIP")
//     }else if (money >= 1000000 && money < 9000000){
//         console.log("Prominent people")
//     }else if(money >= 10000000 && money < 90000000){
//         console.log("Politician")
//     }else if (money > 100000000){
//         console.log("Celebrity")
//     }else{
//         console.log("odogwu")
//     }
    
// }else if(currency === "pounds"){
//     let cal = money/pounds
//     console.log(cal);
//     if (money >= 2000 && money < 5000){
//         console.log("regular ticket")
//     }else if (money >= 5000 && money < 20000){
//         console.log("Big boy regular")
//     }else if (money >= 20000 && money < 200000){
//         console.log("VIP")
//     }else if (money >= 200000 && money < 1000000){
//        console.log("VVIP")
//     }else if (money >= 1000000 && money < 9000000){
//         console.log("Prominent people")
//     }else if(money >= 10000000 && money < 90000000){
//         console.log("Politician")
//     }else if (money > 100000000){
//         console.log("Celebrity")
//     }else{
//         console.log("odogwu")
//     }
// }else{
//     console.log("Invalid currency")
// }

// alert("Welcome To our party in Cubana")
// let partyName = prompt("Please what is your name for this party?")
// alert(Hello ${partyName}, All payments made are non-refundable)
// let currency = prompt(`which currency are you making your payment?
//         1. Naira
//         2. Dollar
//         3. Pounds
//         4. Euro
//         Put the number of the currency you are paying with`)
//         let amount;
// if(currency == 1) {
//     // naira
//     amount = prompt("How much in naira are u paying")
//     if (amount >= 10000000){
//         alert("You booked 'Politicians' ticket");
//     }else if (amount >= 1000000 && amount < 10000000){
//         alert("You booked 'Prominent individual' ticket");
//     }else if (amount >= 200000 && amount < 1000000){
//         alert("You booked 'VVIP' ticket");
//     }else if (amount >= 20000 && amount < 200000){
//         alert("You booked 'VIP' ticket")
//     }else if (amount >= 5000 && amount < 20000){
//         alert("You booked 'BIG BOY REG' ticket");
//     }else if (amount >= 2000 && amount < 5000){
//         alert("You booked 'REGULAR' ticket");  
//     }

// }else if (currency == 2){
//     //dollar
//     amount = prompt("How much in dollars are u paying");
//     let amountInNaira = amount * 1700
//     console.log(amountInNaira)

//     if (amountInNaira >= 10000000){
//         alert("You booked 'Politicians' ticket")
//     }else if (amountInNaira >= 1000000 && amount < 10000000){
//         alert("You booked 'Prominent individual' ticket")
//     }else if (amountInNaira >= 200000 && amount < 1000000){
//         alert("You booked 'VVIP' ticket")
//     }else if (amountInNaira >= 20000 && amount < 200000){
//         alert("You booked 'VIP' ticket")
//     }else if (amountInNaira >= 5000 && amount < 20000){
//         alert("You booked 'BIG BOY REG' ticket")
//     }else if (amountInNaira >= 2000 && amount < 5000){
//         alert("You booked 'REGULAR' ticket") }  
// }else if (currency == 3){
//     //pounds
//     amount = prompt("How much in pounds are u paying");
//     let amountInNaira = amount * 2300
//     console.log(amountInNaira)

//     if (amountInNaira >= 10000000){
//         alert("You booked 'Politicians' ticket")
//     }else if (amountInNaira >= 1000000 && amount < 10000000){
//         alert("You booked 'Prominent individual' ticket")
//     }else if (amountInNaira >= 200000 && amount < 1000000){
//         alert("You booked 'VVIP' ticket")
//     }else if (amountInNaira >= 20000 && amount < 200000){
//         alert("You booked 'VIP' ticket")
//     }else if (amountInNaira >= 5000 && amount < 20000){
//         alert("You booked 'BIG BOY REG' ticket")
//     }else if (amountInNaira >= 2000 && amount < 5000){
//         alert("You booked 'REGULAR' ticket") }  
// }else if (currency == 4){
//     // euro
//     amount = prompt("How much in euro are u paying");
//     let amountInNaira = amount * 2600
//     console.log(amountInNaira)

//     if (amountInNaira >= 10000000){
//         alert("You booked 'Politicians' ticket")
//     }else if (amountInNaira >= 1000000 && amount < 10000000){
//         alert("You booked 'Prominent individual' ticket")
//     }else if (amountInNaira >= 200000 && amount < 1000000){
//         alert("You booked 'VVIP' ticket")
//     }else if (amountInNaira >= 20000 && amount < 200000){
//         alert("You booked 'VIP' ticket")
//     }else if (amountInNaira >= 5000 && amount < 20000){
//         alert("You booked 'BIG BOY REG' ticket")
//     }else if (amountInNaira >= 2000 && amount < 5000){
//         alert("You booked 'REGULAR' ticket") }  
// }else{
//     alert("invalid currency")
// }



// build for bar like bld,different sections and differrnt prices. if ur department is babrbecue,drinks,indomie,food.
let choice = prompt(`which department are you going to?
                 1. Department 1
                 2. Department 2
                 3. Department 3
                 4. Department 4`)
let amount;
let cancel;
let order2;
let total;
let order;



 if (choice == 1) {
    // console.log(choice);
    }
    let food = prompt(`Place your order
        1. rice = 5000
        2. malt = 1000
        3. stout = 2500
        4. basmatic = 10000`)
       if (food == 1){
        alert("you have ordered rice")
        amount = 5000;
        // console.log(typeof amount)
        cancel = parseInt(prompt(`would you like to cancel the remaining order
            1. yes
            2. no`))
        }
            if(cancel == 1){
                console.log("Thanks for choosing us") // IF user cancels then the money is 5000 
                amount = 5000;
                let discount = (5/100) * amount
                console.log(discount);
                let totalMoney = amount - discount
                console.log(totalMoney)
            }else if(cancel == 2){
                let cont = parseInt( prompt(`input your order
                    1. rice = 5000
                    2. malt = 1000
                    3. stout = 2500
                    4. basmatic = 10000`))
            if(cont == 1){
                alert("You just added rice to ur order")
                let total = 5000;
                console.log(typeof total)
                let cal = amount + total
                console.log(cal);
                let discount = (5/100) * cal
                console.log(discount);
                let totalMoney = cal - discount
                console.log(totalMoney);
            }else if(cont == 2){
                alert("You just added malt to ur order")
                 total = 1000;
                // console.log(typeof total)
                 cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(cont == 3){
                alert("You just added stout to ur order")
                total = 2500;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 4){
                alert("You just added stout to ur order")

                total = 10000;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);

            }
        
}else if (choice === 2) {
    // console.log(choice);
    }
    order = prompt(`Place your order
        1. rice = 6000
        2. malt = 2000
        3. stout = 3500
        4. basmatic = 11000`)
       if (order == 1){
        alert("you have ordered rice")
        amount = 6000;
        // console.log(typeof amount)
        cancel = parseInt(prompt(`would you like to cancel the remaining order
            1. yes
            2. no`))
        }
            if(cancel == 1){
                console.log("Thanks for choosing us")// IF user cancels then the money is 5000 
            }else if(cancel == 2){
                order2 = parseInt( prompt(`input your order
                    1. rice = 6000
                    2. malt = 2000
                    3. stout = 3500
                    4. basmatic = 11000`))
            if(order2 == 1){
                let total = 6000;
                console.log(typeof total)
                let cal = amount + total
                console.log(cal);
                let discount = (5/100) * cal
                console.log(discount);
                let totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 2){
                 total = 1000;
                // console.log(typeof total)
                 cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 3){
                total = 2500;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 4){
                total = 10000;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);

            }

}else if (choice === 3) {
    // console.log(choice);
    }
    orde == prompt(`Place your order
        1. rice = 7000
        2. malt = 3000
        3. stout = 4500
        4. basmatic = 12000`)
       if (orde == 1){
        alert("you have ordered rice")
        amount = 7000;
        // console.log(typeof amount)
        cancel = parseInt(prompt(`would you like to cancel the remaining order
            1. yes
            2. no`))
        }
            if(cancel == 1){
                console.log("Thanks for choosing us")// IF user cancels then the money is 5000 
            }else if(cancel == 2){
                order2 = parseInt( prompt(`input your order
                    1. rice = 7000
                    2. malt = 3000
                    3. stout = 4500
                    4. basmatic = 12000`))
            if(order2 == 1){
                let total = 7000;
                console.log(typeof total)
                let cal = amount + total
                console.log(cal);
                let discount = (5/100) * cal
                console.log(discount);
                let totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 2){
                 total = 3000;
                // console.log(typeof total)
                 cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 3){
                total = 4500;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 4){
                total = 12000;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);

            }
}else if (choice === 4) {
    // console.log(choice);
    }
    orde == prompt(`Place your order
        1. rice = 8000
        2. malt = 4000
        3. stout = 4500
        4. basmatic = 13000`)
       if (orde == 1){
        alert("you have ordered rice")
        amount = 8000;
        // console.log(typeof amount)
        cancel = parseInt(prompt(`would you like to cancel the remaining order
            1. yes
            2. no`))
        }
            if(cancel == 1){
                console.log("Thanks for choosing us")// IF user cancels then the money is 5000 
            }else if(cancel == 2){
                order2 = parseInt( prompt(`input your order
                    1. rice = 8000
                    2. malt = 4000
                    3. stout = 4500
                    4. basmatic = 13000`))
            if(order2 == 1){
                let total = 8000;
                console.log(typeof total)
                let cal = amount + total
                console.log(cal);
                let discount = (5/100) * cal
                console.log(discount);
                let totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 2){
                 total = 4000;
                // console.log(typeof total)
                 cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 3){
                total = 4500;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);
            }else if(order2 == 4){
                total = 13000;
                // console.log(typeof total)
                cal = amount + total
                console.log(cal)
                discount = (5/100) * cal
                console.log(discount);
                totalMoney = cal - discount
                console.log(totalMoney);

            }            
}else {
    console.log("cancel the order")
}