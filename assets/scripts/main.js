
const menu = document.getElementById('menu')
const menuItems = document.getElementById('items-home-menu')

menu.addEventListener('click', () => {

    if (menuItems.style.display === "none") {
        menu.style.zIndex = "2"
        menuItems.style.display = "flex"
    }
    else {
        menuItems.style.display = "none"
    }

})

function SwitchThemes() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
    }
    else{
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
    }
}


const intro = document.querySelector('.intro')
const logoHeader = document.querySelector('.logo-header')
const logo = document.querySelector('.logo')

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() =>{

        setTimeout(() => {
            logo.classList.add('fadeIn')
        }, 400)

        setTimeout(() => {
            logo.classList.remove('fadeIn')
            logo.classList.add('fadeOut')
        }, 2000)

        setTimeout(() => {
            intro.style.top = "-100vh"
        },2300)
    })

})