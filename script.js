const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeButton = document.querySelector('.close-button');
const cardInfo = [
    {
        caption: "Test Different Devices",
        image: "images/Devices.png"
    },

    {
        caption: "Test From Different Locations",
        image: "images/Locations.png"
    },

    {
        caption: "Save Your Previous Tests",
        image: "images/Previous.png"
    }
];
const cards = document.querySelector('.cards-section');

cardInfo.forEach(card => cards.innerHTML += `
    <div class="card">
        <img src="${card.image}">
        <p>${card.caption}</p>    
    </div>
`)

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.add('active-links');
})

closeButton.addEventListener ('click', () => {
    navLinks.classList.remove('active-links');
})