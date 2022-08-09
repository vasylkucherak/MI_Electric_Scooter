//*======= встановлення станів елементу ================================================================================================================
elem.focus(); //? фокус
elem.click(); //? клік
elem.remove(); //? видалення
elem.onscroll = function() {}

//*======= Регулярні вирази ==============================================================================================================================
input.addEventListener('keypress', function(e) {
    if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
    }
});

//? (/[^а-яё 0-9]/ig) кирилиця і цифри
//? (/[^а-яё]/ig) тільки кирилиця

//? (/[^a-z 0-9]/ig) латинські букви і цифри
//? (/[^a-z]/ig) тільки латинські букви

//? (/[0-9]/ig) тільки цифри

//*======= Прокрутка на початок сайту ==============================================================================================================================
window.scrollTo(0, 0);

//*======= Блокування кнопки після нажаття ==============================================================================================================================
btn.addEventListener('click', () => {
    btn.disabled = true;
    setTimeout(function() {
        btn.disabled = false;
    }, 1000);
});

//*======= Створення нового елемента, робота з стилями та вставка ==============================================================================================================================
const elem = document.createElement('div');

elem.classList.add('_class');
elem.style.width = '100%'; /* або */ elem.style.cssText = `width: 100%;`;
elem.style.removeProperty('width');
elem.innerHTML = `content`;
let display = window.getComputedStyle(elem).display;

container.append(elem); /* або */ container.appendChild(elem); /* або */ container.insertAdjacentHTML("beforeend", elem);

container.removeChild(elem);

//*======= Отримання позиції елемента ==============================================================================================================================
const elementBoundary = elem.getBoundingClientRect();

const top = elementBoundary.top;
const bottom = elementBoundary.bottom;
const height = elementBoundary.height;
const half = elementBoundary.height / 2;

elem.offsetHeight;

//*======= Отримання позиції сторінки ==============================================================================================================================
document.documentElement.scrollTop

//*======= Звертання до тегів ==============================================================================================================================
document.getElementById('');
document.getElementsByName('');
document.getElementsByClassName(''); 
document.getElementsByTagName('');
document.querySelector('');
document.querySelectorAll('');

//*======= Звертання до тегів відносно елемента ==============================================================================================================================
elem.parentElement;
elem.previousElementSibling;
elem.nextElementSibling;
elem.children;
elem.firstChild;
elem.lastChild;

//*======= Звертання до атрибутів елемента ==============================================================================================================================
elem.dataset.id //? <data-id="">
elem.setAttribute('data-id', 3); //? <data-id="3">
elem.getAttribute('src') //? <src="">

//*======= Івенти ==============================================================================================================================
//? При кліці на клавішу
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") { 
        
    }
});

//? коли проскролили до кінця сторінки
window.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        
    }
});

//? Видалення івенту
window.addEventListener('scroll', showModalByScroll);
function showModalByScroll() {
    /* ... */
    window.removeEventListener('scroll', showModalByScroll);
}

//*======= Інтервали ==============================================================================================================================
const timeInterval = setInterval(function() {
    /* ... */
}, 1000);
clearInterval(timeInterval);

//*======= Перемикач ==============================================================================================================================
switch (elem) {
    case 1:

        break;
    case 'один':

        break;
    case true:

        break;
    default:

}

//*======= Витягування числа з строки ==============================================================================================================================
function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
}

//*======= Локальне зберігання даних ==============================================================================================================================
if (localStorage.getItem('hand')) {
    hand = localStorage.getItem('hand');
} else {
    hand = 'left';
    localStorage.setItem('hand', 'left');
}

//*======= Динамічний показ помилки при введенні в полі вводу ==============================================================================================================================
input.addEventListener('input', () => {
    if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
    } else {
        input.style.border = 'none';
    }
    //* або *//
    //? заміна букв на ''
    item.value = item.value.replase(/\D/, '');
});

//*======= Довжина об'єкта ==============================================================================================================================
Object.keys(elem).length;

//*======= Рандом ==============================================================================================================================
const randomElem = Math.floor(Math.random() * elements.length);

//*======= Округлення числа ==============================================================================================================================
num.toFixed(2); // 0.00

//*======= Отримати індекс об'єкта у базі даних із певним id (напр. для видалення об'єкта) ==============================================================================================================================
const index = data.findIndex(elem => elem.id == id); //? якщо id об'єкта збігається із заданим id 

//*======= Dynamic imports ==============================================================================================================================
//? 1-й спосіб
if (loading) {
    import('./someFunc')
        .then(obj => obj.logger())
        .catch(); //? обробка помилок
}
//? 2-й спосіб
async function func () {
    const { logger, secondLog } = await import('./someFunc');
    logger();
    secondLog();
}
//? 3-й спосіб
if (loading) {
    import('./someFunc')
        .then(obj => obj.default())
        .catch(); //? обробка помилок
}
//? someFunc.js (imported file)
export function logger() {
    console.log('Hello world!');
}

export function secondLog() {
    console.log('Bye!');
}

export default function defLog() {
    console.log('Default!');
}

//*======= Date (дата та час) ==============================================================================================================================
//? Створення
new Date(); // поточна дата і час | Wed Jan 13 2021 10:48:30 GMT+0300
new Date(milliseconds) // поточний час в ms (timestamp) котрий пройшов від 1 Jan 1970p. UTC+0 (1хв)

new Date("2015-05-25T10:51:12.941") // вказати дату строкою YYYY-MM-DDTHH:MM:SS:MSSZ | Z= +HH:MM / -HH:MM
Date.parse("2015-05-25T10:51:12.941") // вказати дату строкою і перевести в мiлісекунди (timestamp) | 1432540272941

let t= new Date(2015,6,21,10,51,54,458) // вказати дату компонентами (місяці починаються з нуля / обов'язкові рік і місяць / день місяця default 1 / год, хв, сек, мсек default 0)
+t // вказати дату компонентами і перевести в мiлісекунди (timestamp)

//? отримати
t.getFullYear() // рік
t.getMonth() // місяць
t.getDate() // день місяця
t.getHours() // години
t.getMinutes() // хвилини
t.getSeconds() // секунди
t.getMilliseconds() // мілісекунди
t.getDay() // день тижня (0-неділя, 6-субота)
t.getTime() // кількість мілісекунд (timestamp)
t.getTimezoneOffset() // різницю в хвилинах між місцевим часом і UTC

//? встановити
t.setFullYear() // рік
t.setMonth() // місяць
t.setDate() // день
t.setHours() // години
t.setMinutes() // хвилини
t.setSeconds() // секунди
t.setMilliseconds() // мілісекунди
t.setTime() // кількість мілісекунд (timestamp)

//? розрахувати дату
a.setDate(a.getDate()+2) // додати 2 дня

//? форматувати дату
let l = new Date(2014,11,31,12,30,0)
let options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}
l.toLocaleString("uk", options) // настроюване відображення | "en-US"-англійською

l.toString() // відображає дату і час
l.toDateString() // відображає тільки дату
l.toTimeString() // відображає тільки час
//* item.closest('.file_upload').style.border = "5px solid yellow";