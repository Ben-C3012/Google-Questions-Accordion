// Get UI Elements 
const button = document.querySelector('.expand-button')
let cardBodys = document.querySelectorAll('.card-body')
let cardHeaders = document.querySelectorAll('.card-header')
const icons = document.querySelectorAll('i')
const cards = document.querySelectorAll('.card')

cards[0].addEventListener('click', (e) => {
        cardBodys[0].classList.toggle('active')
        icons[0].classList.toggle('active')
  })

  
cards[1].addEventListener('click', (e) => {
  cardBodys[1].classList.toggle('active')
  icons[1].classList.toggle('active')

})

cards[2].addEventListener('click', (e) => {
  cardBodys[2].classList.toggle('active')
  icons[2].classList.toggle('active')

})


