
const menu = document.getElementById('home-menu')
const menuItems = document.getElementById('items-home-menu')
const menuLinks = document.getElementsByClassName('menu-link')

menu.addEventListener('click', () => {


    if (menuItems.style.display === "none") {
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