// 1. document.getElementById("genDiv")
// 2. getElementByClassName("singleDiv")
// 3. getElementByTagName("h1")
// 4. querySelector("#genDiv")
// 5. querySelectorAll(".bigDiv")

// let div = document.getElementsByClassName("mainDiv")
let Btn = document.getElementById("colorBtn")
let body = document.body
let countText = document.getElementById("count")
// let dispColor = document.getElementById("ant")

// let count = 0
// let color = ["red", "yellow", "orange", "blue", "green"]

// function generateRandomColor() {
//     const letters = '0123456789ABCDEF'
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color;
// }
// Btn.addEventListener("click", () => {
//     let generateColor = generateRandomColor()  
//     body.style.backgroundColor = generateColor
//     dispColor.textContent = generateColor

//     count++
//     countText.textContent = Count: ${count}

//   })

// GETTING COLORS FROM ARRARY
let arrayColors = ["red", "yellow", "blue", "orange", "green", "pink", "purple"]
let colorIndex = 0
let count = 0
Btn.addEventListener("click", () => {
    body.style.backgroundColor = arrayColors[colorIndex]
    body.style.border = "solid 10px black"
    colorIndex = (colorIndex + 1) % arrayColors.length

    count++
    countText.textContent = `Count: ${count}`
})
const letters = '0123456789ABCDEF'
console.log(letters[11]);