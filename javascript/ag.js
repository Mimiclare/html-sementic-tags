// let fullName = prompt("Name of student")
// console.log(fullName);
// alert(fullName)

// let Age = prompt("Age of student")
// console.log(Age);
// alert(Age)

// let Hobby = prompt("Hobby of student")
// console.log(Hobby);
// alert(Hobby)

// alert(my name is ${fullName}, my age is ${Age}. i love playing ${Hobby});
//let sentence = "My name is" + fullname + ",I'm" + Age+". I love" + Hobby + " so much."
//alert(sentence)




//Arithmectic operators
//  Area of a Circle
// For calculating area we need to form a function first

//given diameter is 22cm
// const diameter = 22;

//calculate the radius
// let radius = diameter/2;
// console.log(radius)

//Area of a circle=3.14r**2
// let area = Math.PI* Math.pow(radius,2);
// console.log(area)  //cm

//convert answer to meters
// let meters = area/100;
// console.log(meters)


//perimeter
let r = 11  //cm

let pi = 3.142

//peri = 3.14*22cm

// let perimeter = 2*pi*r
// console.log(perimeter)

//convert
// let m = perimeter/100;
// console.log(m)


//A car traveeling from NOWAS to Aptech at a speed of 20km/m,if the distance is 60km. find ur time in secs
let speed = 20; //km/m

let distance = 60 //km

//convert speed to secs
// let cal = distance/speed
// console.log(cal)

// let secs = cal*60
// console.log(secs)  //km/secs
//console.log(The time is ${timesecs}s)



// console.log(prompt("Name of student "))
// console.log(prompt("Age of student"))

// console.log(prompt("Hobby of student"))

// let name = "Miracle is 25 years and her hobby is playing video games"
// console.log(name);

// let ns = (prompt("Total students"));
// console.log(ns);

// let passed = (prompt("passed")) //45
// alert(passed)
// console.log(passed);

// let f = (prompt("f"))  //25
// alert(f)
// console.log(f);

//passed = ("calculate percentage of passed students")
// calculation = passed / ns * 100
// console.log(calculation)

//calculate failed
// calculate = f / ns * 100
// console.log(calculate)


//ASSIGNMENT
// let totsu = prompt("input the total number of students")
// let passed = prompt("input total number of students passed")
// let failed = totsu - passed

// let passpercent = (passed/totsu) * 100
// let failpercent = (failed/totsu) * 100

// console.log("the total number of students in the class is " + totsu + ".\nThe percentage of students passed is " 
//     + passpercent + " while the percentage of students failed is " + failpercent)

// let names = prompt("input ur names")


// let year = prompt("input date of birth")
// let currenYear = 2025
// let age = currenYear - year
// console.log(age);

// let country = "Nigeria"

// let gender = "Female"

// let total = 3400000
// alert(total)

// let paid = prompt("amount of money student has paid")
// console.log(paid);

// let rem = total - paid
// console.log(rem);

// let paid1 = (paid/total) * 100
// console.log(paid1);

// let rem1 = (rem/total) * 100
// console.log(rem1);

// console.log(`Name:${names} \nDate of birth:${age} \nCountry: ${country} \nGender: ${gender} \nTotal School Fees: #${total} \npaidPercent:${paid1}% \nremainingPercent: ${rem1}% `)

// alert("Hello customer, welcome to our resturant")
// let dept = prompt(`choose the dept, you wish to stay:
//     1. Popular
//     2.VIP
//     3. VVIP
//     4. Exclusive`)
//     let good;
//     let malt;
//     let stout;
//     let rice;
//     let basmatic;
//     if (dept == 1){
//         malt = 1000
//         stout = 2500
//         rice = 5000
//         basmatic = 10000

//         good = prompt(`Choose from the options what u want:
//             1. Malt (#1000.00)
//             2. Stout (#2500.00)
//             3. Rice(#5000.00)
//             4. Basamtic (#10000.00)`)

//             if (good == 1){
//                 let disc = (5/100) * malt
//                 let pay = malt - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 2){
//                 let disc = (5/100) * stout
//                 let pay = stout - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 3){
//                 let disc = (5/100) * rice
//                 let pay = rice - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 4){
//                 let disc = (5/100) * basmatic
//                 let pay = basmatic - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else{
//                 alert("You would have chosen from the menu")
//             }
//     }else if (dept ==2){
//         malt = 2000
//         stout = 3500
//         rice = 6000
//         basmatic = 11000

//         good = prompt(`Choose from the options what u want:
//             1. Malt (#2000.00)
//             2. Stout (#3500.00)
//             3. Rice(#6000.00)
//             4. Basamtic (#11000.00)`)

//             if (good == 1){
//                 let disc = (5/100) * malt
//                 let pay = malt - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 2){
//                 let disc = (5/100) * stout
//                 let pay = stout - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 3){
//                 let disc = (5/100) * rice
//                 let pay = rice - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 4){
//                 let disc = (5/100) * basmatic
//                 let pay = basmatic - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else{
//                 alert("You would have chosen from the menu")
//             }
//     }else if (dept ==3){
//         malt = 3000
//         stout = 3500
//         rice = 7000
//         basmatic = 12000

//         good = prompt(`Choose from the options what u want:
//             1. Malt (#3000.00)
//             2. Stout (#3500.00)
//             3. Rice(#7000.00)
//             4. Basamtic (#12000.00)`)

//             if (good == 1){
//                 let disc = (5/100) * malt
//                 let pay = malt - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 2){
//                 let disc = (5/100) * stout
//                 let pay = stout - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 3){
//                 let disc = (5/100) * rice
//                 let pay = rice - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 4){
//                 let disc = (5/100) * basmatic
//                 let pay = basmatic - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else{
//                 alert("You would have chosen from the menu")
//             }
//     }else if (dept ==4){
//         malt = 4000
//         stout = 4500
//         rice = 8000
//         basmatic = 13000

//         good = prompt(`Choose from the options what u want:
//             1. Malt (#4000.00)
//             2. Stout (#4500.00)
//             3. Rice(#8000.00)
//             4. Basamtic (#13000.00)`)

//             if (good == 1){
//                 let disc = (5/100) * malt
//                 let pay = malt - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 2){
//                 let disc = (5/100) * stout
//                 let pay = stout - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 3){
//                 let disc = (5/100) * rice
//                 let pay = rice - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else if(good == 4){
//                 let disc = (5/100) * basmatic
//                 let pay = basmatic - disc
//                 alert(`We have given you a discount of 5%, you will now pay ${pay} `) 
//             }else{
//                 alert("You would have chosen from the menu")
//             }
//     }else{
//         alert("This department does not exist")
//     }

//     function hei(height = 10) {
//         switch(true) {
//             case (height >= 3 && height < 5): // ft
//             console.log("Short");
//             break;
        
//             case(height >= 5 && height < 7): // ft
//             console.log("Tall");
//             break;
        
//             case(height >= 7 && height < 10): // ft
//             console.log("Very tall");
//             break;

//             case(height >= 10 && height < 15): // ft
//             console.log("Giant");
//             break;
        
//             default:
//                 console.log("You just fabricated your height");
//                 break;
        
            
//         }
//     }
//    hei();
//    hei(7);
//    hei(20);
//    hei(0)
    
// let numbers =["0", "1", "2", "3","4"]
// console.log(numbers)
    
//     function arrary(number=["1", "2", "3","4"]) {
    
//                 switch(number) {
//                 case 1:
//                 console.log("first week of the month");
//                 break;
                        
//                 case 2:
//                 console.log("second week of the month");
//                 break;
                        
//                 case 3: 
//                 console.log("third week of the month");
//                 break;
                
//                 case 4:
//                 console.log("fourth week of the month");
//                 break;
                        
//                 default:
//                 console.log("invalid");
//                 break;
                        
//         }
//     }

// arrary(parseInt(prompt()))

let defineWeek = (week) => {
  
    let weeks = [1, 2, 3, 4]
    switch (true) {
        case (week == weeks[0]) :
            console.log("This is the first week")
        break;
        
        case (week == weeks[1]) :
            console.log("This is the second week")
        break;

        case (week == weeks[2]) :
            console.log("This is the third week")
        break;

        case (week == weeks[3]) :
            console.log("This is the fourth week")
        break;

        default:
            console.log("This is not a week")
        
    }

}
defineWeek(2)
defineWeek(parseInt(prompt()))

// let cup = ["water" "milk" "tea", "agbo"]