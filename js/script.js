const menuButton = document.getElementsByClassName('menu')[0]
const menuHidden = document.getElementById('menu-hidden')
const closeButton = document.getElementById('close-button')

menuButton.addEventListener('click', () => {
    menuHidden.classList.toggle('menu-open')
})

closeButton.addEventListener('click', () => {
    menuHidden.classList.toggle('menu-open')
})