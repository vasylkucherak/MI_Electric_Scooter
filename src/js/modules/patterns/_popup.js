//* Модальне вікно

export default function popup({triggersSelector, popupSelector, closeSelector, destroyTrigger = false, openWhenScrollEnded = false, openWhenTimeEnded = 0, closeOnEscape = false, closeOnBgClick = false}) {
    
    let btnPressed = false;
    
    const triggers = document.querySelectorAll(triggersSelector); // кнопки, котрі активують модальне вікно
    const popup = document.querySelector(popupSelector); // модальне вікно
    const close = document.querySelector(closeSelector); // кнопка, котра закриває модальне вікно

    for (let i = 0; i < triggers.length; i++) {
        const trigger = triggers[i];
        trigger.addEventListener('click', (e) => {
    
            if (e.target) {
                e.preventDefault();
            }
            btnPressed = true;
            if (destroyTrigger) {
                trigger.remove();
            }
            openPopup(popupSelector);
        });
    };

    close.addEventListener('click', () => {
        closePopup(popupSelector);
    });

    if (closeOnBgClick) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup(popupSelector);
            }
        });
    }

    if (closeOnEscape) {
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && popup.style.display == "flex") { 
                closePopup(popupSelector);
            }
        });
    }

    if (openWhenScrollEnded) {
        openPopupByScroll(triggersSelector);
    }

    if (openWhenTimeEnded) {
        openPopupByTime(popupSelector, openWhenTimeEnded);
    }

    function openPopup(selector) {
        const scroll = calcScroll();

        document.querySelector(selector).style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scroll}px`;
    }

    function closePopup(selector) {
        document.querySelector(selector).style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = `0px`;
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openPopupByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    function openPopupByTime(selector, time) {
        setTimeout(function() {
            if (!btnPressed) {
                openPopup(selector);
            }
        }, time);
    }
}