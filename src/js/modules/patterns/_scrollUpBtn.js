//* Скрол на початок сайту при кліці на кнопку вверх

export default function scrollUpBtn({breakpoint = 1650}) {

    const upElem = document.querySelector('.scroll-up-btn'); // кнопка Up
    const point = breakpoint; // брейк-поінт

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > point) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });
}