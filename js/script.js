let burgerButton = document.querySelector("svg");
let burgerMenu = document.querySelector(".menu-burger")

burgerButton.onclick = function () {
    burgerButton.classList.toggle("active");
    burgerMenu.classList.toggle("active");

}


