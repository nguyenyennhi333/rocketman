const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const submitBtn = document.querySelector(".submitBtn");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach( n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})