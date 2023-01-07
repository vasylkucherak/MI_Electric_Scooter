//* Імпорт і налаштування скриптів

//? Базові скрипти ====================================================================================================================================
import isWebP from "./modules/_isWebP.js"; //? Перевірка підтримки webp зображень
import touchOrCursor from "./modules/_touchOrCursor.js"; //? Перевірка на touch або mouse івенти

//? Додаткові скрипти =================================================================================================================================
import theme from "./modules/_theme.js";
import headerMenu from "./modules/_headerMenu.js"; //? Меню шапки
import charTab from "./modules/_charTab.js"; //? Таб характеристик
import securityTab from "./modules/_securityTab.js"; //? Таб про безпеку
//import spoiler from "./modules/_spoiler.js"; //? Спойлер (або акордіон)
//import swiperSlider from "./modules/_swiperSlider.js" //? Слайдер Swiper
//import slickSlider from "./modules/_slickSlider.js" //? Слайдер Slick
//import form from "./modules/_form.js"; //? Форма
//import popup from "./modules/_popup.js"; //? Модальне вікно
//import scrollOnLinks from "./modules/_scrollOnLinks.js"; //? Плавний скрол при при переході по ссилці
//import scrollUpBtn from "./modules/_scrollUpBtn.js"; //? Скрол на початок сайту при кліці на кнопку вверх
//import animationByScroll from "./modules/_animationByScroll.js"; //? Спрацювання анімації при скролі
//import slideUpDownToggle from "./modules/_slideUpDownToggle.js"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery
//import dynamicAdaptive from "./modules/_dynamicAdaptive.js"; //? Динамічний адаптив
//import ratings from "./modules/_ratings.js"; //? зірковий рейтинг
//import lazyLoading from "./modules/_lazyLoading.js"; //? Лінива загрузка
//import noUISlider from "./modules/_noUISlider.js"; //? бігунок
//import scrollBar from "./modules/_scrollBar.js"; //? Індикатор прокрутки

//? Скрипти для модулів =================================================================================================================================
//import {_slideUp, _slideDown, _slideToggle} from "./modules/_slideUpDownToggle.js"; //? Створення анімацій slideUp, slideDown і slideToggle як у jQuery

document.addEventListener('DOMContentLoaded', function() {

    theme();
    
    isWebP();

    touchOrCursor();

    headerMenu();

    charTab();

    securityTab();

    /* spoiler({
        spoilerTrigger: '.spoiler__header',
        acordion: false
    }); */

    //swiperSlider();

    //slickSlider();

    /* form({
        formId: 'form',
        imageInputId: 'formImage',
        previewId: 'formPreview'
    }); */

    /* popup({
        triggersSelector: '[data-popup]',
        popupSelector: '.popup',
        closeSelector: '[data-close]',
        destroyTrigger: false,
        openWhenScrollEnded: false,
        openWhenTimeEnded: 0,
        closeOnEscape: true,
        closeOnBgClick: true
    }); */

    /* scrollOnLinks({
        linksAttribue: '[href^="#"]',
        scrollSpeed: 0.2
    }); */

    /* scrollUpBtn({
        breakpoint: 1650
    }); */

    //animationByScroll();

    //slideUpDownToggle();

    /* dynamicAdaptive({
        type: "max"
    }); */

    //ratings();

    //lazyLoading();

    //noUISlider();

    //scrollBar();
});