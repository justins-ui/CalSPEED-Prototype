const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active-links');
})

closeButton.addEventListener ('click', () => {
    navLinks.classList.remove('active-links');
})