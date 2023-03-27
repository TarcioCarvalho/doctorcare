const buttonMenu = document.querySelector("#btn-menu")
const menu = document.querySelector(".menu-nav-bar")
const body = document.querySelector("body")

buttonMenu.addEventListener("click", ()=> {
    buttonMenu.classList.toggle("active")
    body.classList.toggle("active")
    menu.classList.toggle("active")
})