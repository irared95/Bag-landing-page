document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav__menu');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    })
});