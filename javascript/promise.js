// fetch("https://api.pexels.com/v1/search?query=man", {
//     headers: {
//         Authorization: "cnApHD5xK5W8Fys3FbVa1YxKvyy9FdsG73bASVVfH23zdIWTHzLn4QfD"
//     }
// }).then(res => res.json ()).then(data => {
//     console.log(data);


//     console.log(data.photos);
//     data.photos.forEach(photo => {
//         console.log(photo.src.orginal);
//         imgDiv.innerHTML +=<div><img src = ${photo.src.orginal}</div>
//     })
// })
// console.log("hello")
// console.log("I ran")
//======== the search div=======
let searchBtn = document.querySelector(".search-btn")
let inputBox = document.getElementById("input-box")
let searchDisplay = document.querySelector(".display-search")

searchBtn.addEventListener('click', () => {
    letsearchValue = inputBox.value
    console.log(searchValue);

    async function searchCall() {
       const response =  await fetch (`https://api.pexels.com/v1/search?query=man`, {
            headers: {
                Authorization: "cnApHD5xK5W8Fys3FbVa1YxKvyy9FdsG73bASVVfH23zdIWTHzLn4QfD"
            }
    }) 
        const data = await response.json()
        
        data.photos.forEach(photo => {
            console.log(photo.src.original);
            searchDisplay.innerHTML += `<div class = "search-img-indi"> <img src = ${photo.src.orginal}/></div>`
        })
    }
    searchCall()
})