const menu = document.querySelector('.burger');
const nav = document.querySelector('.burger__menu');
const body = document.body;
const links = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.header__logo');

console.log(menu)


menu.addEventListener('click', burger);

function burger(e) {
    e.preventDefault();

    nav.classList.toggle('burger__active');
    menu.classList.toggle('burger__item__active');
    body.classList.toggle('no-scroll');

};

links.forEach((link) => {
    link.addEventListener('click', burger_close);
});

logo.addEventListener('click', burger_close);



function burger_close() {
    nav.classList.remove('burger__active');
    menu.classList.remove('burger__item__active');
    body.classList.remove('no-scroll');
}
