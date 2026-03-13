let mainMenuIcon = document.querySelector(".main-menu-icon")
let exitMenuIcon = document.querySelector(".exit-menu-icon")
let queryNav = document.querySelector("query-nav")

mainMenuIcon.addEventListener('click', () =>{
    mainMenuIcon.style.display = "none"
    exitMenuIcon.style.display = "block"
    queryNav.style.display = "flex"
    // queryNav.classList.toggle('show')

})
exitMenuIcon.addEventListener('click', () => {
    mainMenuIcon.style.display = "block"
    exitMenuIcon.style.display = "none"
    queryNav.style.display = "none"
})
let wigJson = [
    {
    name: "Bone straight",
    img: "../images/bones.jpg"
},
    {
     name: "Bounce",
     img: "../images/bounce.jpg"  
    } 
    
]

let momDiv = document.querySelector(".mom-each-div")

wigJson.forEach(wig => {
    momDiv.innerHTML += `<div class = 'each-div'>
    <img src = ${wig.img}></div>` 
    console.log(wig.img)
})