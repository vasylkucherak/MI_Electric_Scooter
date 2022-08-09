//* Спрацювання анімації при скролі

export default function animationByScroll() {

    let isScrolling = false;

    // оптимізація івенту "scroll" (зменшення кількості зчитування події скролу до 60 на секунду)
    window.addEventListener("scroll", throttleScroll, false);
    function throttleScroll(e) {
        if (isScrolling == false) {
            window.requestAnimationFrame(function() {
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    //TODO:1 Вказуємо анімовані елементи ===============================================================================================================
    //* коли один анімований елемент
    //const animItem = document.querySelector("");
    //* коли декілька анімованих елементів
    //const animItems = document.querySelectorAll("");
    //TODO:1 ===========================================================================================================================================

    function scrolling() {
    //TODO:2 Навішуємо клас активності =================================================================================================================
        //* Для одного елемента
        // isPartiallyVisible(animItem) ? animItem.classList.add("animated") : animItem.classList.remove("animated");
        //* Для декількох елементів
        /* for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            isFullyVisible(animItem) ? animItem.classList.add("animated") : animItem.classList.remove("animated");
        } */
    //TODO:2 ===========================================================================================================================================
    }
    //TODO:3 Вибираємо тип спрацювання =================================================================================================================
    //* коли повністю видно
    /* function isFullyVisible(el) {
        const elementBoundary = el.getBoundingClientRect();

        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;

        return ((top >= 0) && (bottom <= window.innerHeight));
    } */

    //* коли на половину видно
    /* function isHalfyVisible(el) {
        const elementBoundary = el.getBoundingClientRect();

        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        const half = elementBoundary.height / 2;

        return ((top + half >= 0) && (half + window.innerHeight >= bottom));
    } */

    //* коли починає видніти
    /* function isPartiallyVisible(el) {
        const elementBoundary = el.getBoundingClientRect();

        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        const height = elementBoundary.height;

        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    } */
    //TODO:end =========================================================================================================================================
}