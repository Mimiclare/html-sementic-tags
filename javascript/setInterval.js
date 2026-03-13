// ========= SET INTERVAL ===============
// set interval is a function that executes a block of code repeatedly at a spcified interval

let Btn = document.getElementById("colorBtn")
let body = document.body
let countText = document.getElementById("count")
let dispColor = document.getElementById('ant')

let count = 0
let colorIndex = 0


function generateRandomColor(){
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color);

    return color;
    
}
generateRandomColor(0)

Btn.addEventListener("click", () =>{
    let generateColor = generateRandomColor()
    body.style.backgroundColor = generateColor
    dispColor.textContent = generateColor

    let btnColor = ["red", "blue"]
    Btn.style.color = btnColor[colorIndex]
    colorIndex = (colorIndex + 1) % btnColor.length

    count++
    countText.textContent = `Count: ${count}`
})


//============ SET TIMEOUT ==========
// Set Timeout is a function that excutes a block of code once after a specified time
setInterval(() => {
    let generateColor = generateRandomColor()
    body.style.backgroundColor = generateColor

    
    dispColor.textContent = generateColor

    let btnColor = ["red", "blue"]
    Btn.style.color = btnColor[colorIndex]
    colorIndex = (colorIndex + 1) % btnColor.length

    count++
    countText.textContent = `Count: ${count} `
}, 5000)