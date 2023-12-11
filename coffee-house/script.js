// Burger

const menu = document.querySelector('.burger');
const nav = document.querySelector('.burger__menu');
const body = document.body;
const links = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.header__logo');

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


// Slider

const slide = document.querySelectorAll('.favorite__item');
const favorite_sliders = document.querySelector('.favorite__sliders')
const control_left = document.querySelector('.controls__left');
const control_right = document.querySelector('.controls__right');
const sliders_block = document.querySelectorAll('.sliders__block')

if (control_left && control_right) {
    control_left.addEventListener('click', changeCardPrev)
    control_right.addEventListener('click', changeCardNext)
}
let index = 0;

function changeCardPrev() {

    if (index === 0) {
        slide[index].classList.remove('--item__active');
        sliders_block[index].classList.remove('--active');
        index = 2;
        slide[index].classList.toggle('--item__active');
        sliders_block[index].classList.toggle('--active');
    }
    else {
        slide[index].classList.remove('--item__active');
        slide[index - 1].classList.toggle('--item__active');
        sliders_block[index].classList.remove('--active');
        sliders_block[index - 1].classList.toggle('--active');
        index--;
    }
};

function changeCardNext() {
    if (index === slide.length - 1) {
        slide[index].classList.remove('--item__active');
        sliders_block[index].classList.remove('--active');
        index = 0;
        slide[index].classList.toggle('--item__active');
        sliders_block[index].classList.toggle('--active');
    }
    else {
        slide[index].classList.remove('--item__active');
        slide[index + 1].classList.toggle('--item__active');
        sliders_block[index].classList.remove('--active');
        sliders_block[index + 1].classList.toggle('--active');
        index++;
    }

};

let repeat = setInterval(changeCardNext, 5000);


// let block__active = document.querySelector(".--active")

// function animateBlock() {
    
//     let start = Date.now();

//     let timer = setInterval(function() {
//         let timePassed = Date.now() - start;
//         if (timePassed >= 5000) {
//             clearInterval(timer);
//         }
//         draw(timePassed);
//     }, 500);
// }

// setInterval(function draw(timePassed) {
    
//     // let width = window.getComputedStyle(block__active).width.replace(/[^0-9]/g,"");
//     block__active.style.width += timePassed / 10 + 'px';
//     console.log(block__active.width);
// }, 500)

// let active = setInterval(animateBlock, 5000);

// let sliders_block_active = document.querySelectorAll('.--active');
// console.log(sliders_block_active);

// function animateBlock() {
//     let start = Date.now();

//     let timePassed = Date.now() - start;
//     while (timePassed <= 5000) {
//         let block_len = window.getComputedStyle(sliders_block_active[0]).width.replace(/[^0-9]/g,"");
//         console.log(block_len)
//     } if (timePassed >= 5000) clearInterval(timer);

// }

// let anim = setTimeout(animateBlock(), 7000);



// load menu

const load = document.querySelector(".refresh");
console.log(load);
const items = document.querySelectorAll(".menu__item");

load.addEventListener('click', itemLoad);

function itemLoad(e) {
    e.preventDefault();
    load.style.display = "none";
    for (const item of items) {
        item.classList.remove('--hidden')
    };
}