const burgerBtn = document.querySelector('.burger-btn');
const nav = document.getElementById('nav');
const headerOverview = document.querySelector('.header-overview');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    headerOverview.classList.toggle('descent');
})