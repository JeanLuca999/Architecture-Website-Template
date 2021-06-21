const menuButton = document.getElementsByClassName('menu')[0]
const menuHidden = document.getElementById('menu-hidden')

menuButton.addEventListener('click', () => {
    menuHidden.classList.toggle('menu-open')
})