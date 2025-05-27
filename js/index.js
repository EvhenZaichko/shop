const basketCard = document.querySelector('.basket-card')
const modal = document.querySelector('.modal')
const gameBanner = document.querySelector('.game-banner')
const clearButton = document.querySelector('.clear-button')
const questionModal = document.querySelector('.question-modal')
const questionButtons = document.querySelectorAll('.question-button')
const arrow = document.querySelector('.modal-arrow')
const modalBackContainer = document.querySelector('.modal-back-container')
const userIcon = document.querySelector('.user-icon')
const formContainer = document.querySelector('.form-container')
const formBox = document.querySelector('.form-box')

userIcon.addEventListener('click', () =>{
    formContainer.classList.toggle('active')
})

addEventListener('click', (event) => {
    if(!event.target.closest('.form-box') &&
        event.target !== userIcon){
        formContainer.classList.remove('active')
    }

})

basketCard.addEventListener('click', () => {
    modal.classList.add('active')
})

basketCard.addEventListener('click', () => {
    modal.classList.add('active')
})

addEventListener('click', (event) => {
    if(!event.target.closest('.modal-content1') &&
        event.target !== basketCard){
        modal.classList.remove('active')
    }

})

clearButton.addEventListener('click', () =>{
    if(cart.length > 0){
        questionModal.classList.add('active')
    }else {
        questionModal.classList.remove('active')
    }
})

questionButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        questionModal.classList.toggle('active')
    })
})


arrow.addEventListener('click',  () =>{
    modalBackContainer.classList.toggle('active-visible')
})

arrow.addEventListener('mouseover',  () =>{
    modalBackContainer.classList.toggle('active-visible')
})

const basketIcon = document.querySelector('.basket-icon')
const basketField = document.querySelector('.basket-field')

basketIcon.addEventListener('click', () =>{
    basketField.classList.toggle('active')
    basketIcon.classList.toggle('active')
    userIcon.classList.toggle('active')
})
let PNG1 = 'https://www.gamewallpapers.com/download.php?img=wallpaper_the_last_of_us_part_1_01_1920x1080.jpg'

