const toggleBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})