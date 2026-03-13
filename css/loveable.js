const hamburger = document.getElementById('hamburger');
const down = document.querySelector('.down');
const downcontent = document.querySelector('.down-content')

hamburger.addEventListener('click', () => {
  down.classList.toggle('active')

})

 downcontent.addEventListener('click', () => {
 down.classList.remove('active')
})
