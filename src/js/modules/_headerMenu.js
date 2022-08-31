//* Меню шапки

export default function headerMenu() {
    const header = document.querySelector('.header');
    const menuBurger = document.querySelector('.menu__burger'); // кнопка бургера
    const menuBody = document.querySelector('.menu__body'); // контейнер для кнопок меню
    const menuLinks = menuBody.querySelectorAll('a'); // кнопки меню

    document.addEventListener('scroll', function(e) {
        if (document.documentElement.scrollTop > 5) {
            header.classList.add('_active');
        } else {
            header.classList.remove('_active');
        }
    });

    if (menuBurger) {
        menuBurger.addEventListener('click', function() { // при кліці на кнопку бургера
            if (menuBurger.classList.contains('active') && document.documentElement.scrollTop > 5) {
                header.classList.add('_active');
            } else {
                header.classList.remove('_active');
            }
            document.body.classList.toggle('lock'); // забороняємо прокручувати сайт
            menuBurger.classList.toggle('active'); // активуємо анімацію відкриття кнопки бургера
            menuBody.classList.toggle('active'); // показуємо панель меню
        });

        for (let i = 0; i < menuLinks.length; i++) {
            const menuLink = menuLinks[i];
            menuLink.addEventListener('click', function() { // при кліці на кнопку меню
                if (menuBurger.classList.contains('active')) { // якщо кнопка бургеру активна (тобто, панель меню показується)
                    document.body.classList.remove('lock'); // дозволяємо прокручувати сайт
                    menuBurger.classList.remove('active'); // активуємо анімацію закриття кнопки бургера
                    menuBody.classList.remove('active'); // приховуємо панель меню
                    header.classList.add('_active');
                }
            });
        };

        //* Відкриття випадаючого списку при кліці на стрілку
        //TODO: якщо кнопка відносна до випадаючого меню не є ссилкою, тоді івент кліку навішуємо самій кнопці а не стрілці
        const menuArrows = document.querySelectorAll('.menu__arrow'); // стрілки кнопок меню

        for (let a = 0; a < menuArrows.length; a++) {
            const menuArrow = menuArrows[a];
            menuArrow.addEventListener('click', function() { // при кліці на стрілку
                menuArrow.classList.toggle('active'); // тоглимо анімацію стрілки
                menuArrow.parentElement.classList.toggle('active'); // тоглимо показ випадаючого списку меню
            });
        }
    }
}