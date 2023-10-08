const burgerBtn = document.querySelector('.burger-btn');
const nav = document.getElementById('nav');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
})