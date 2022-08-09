//* Лінива загрузка

export default function lazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]'); // фотограції із лінивою загрузкою
    const loadMapBlock = document.querySelector('._load-map'); // контейнер мапи
    const loadMoreBlock = document.querySelector('._load-more'); // контейнер контенту із дозагрузкою
    const windowHeight = document.documentElement.clientHeight; // висота екрану

    let lazyImagesPositions = []; // масив положень всіх фотографій

    if (lazyImages.length > 0) {
        for (let i = 0; i < lazyImages.length; i++) {
            const lazyImage = lazyImages[i];
            
            if (lazyImage.dataset.src || lazyImage.dataset.srcset) {
                lazyImagesPositions.push(lazyImage.getBoundingClientRect().top + scrollY);
                lazyScrollCheck();
            }
        }
    }

    window.addEventListener('scroll', lazyScroll);
    function lazyScroll() {
        if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
            lazyScrollCheck();
        }
        if (!loadMapBlock.classList.contains('_loaded')) {
            getMap();
        }
        if (!loadMoreBlock.classList.contains('_loading')) {
            loadMore();
        }
    }

    //? ліниві фотографії
    function lazyScrollCheck() {
        let imgIndex = lazyImagesPositions.findIndex(
            item => scrollY > item - windowHeight
        );

        if (imgIndex >= 0) {
            if (lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            } else if (lazyImages[imgIndex].dataset.srcset) {
                lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
                lazyImages[imgIndex].removeAttribute('data-srcset');
            }
            delete lazyImagesPositions[imgIndex];
        }
    }

    //? лінива мапа
    function getMap() {
        const loadMapBlockPosition = loadMapBlock.getBoundingClientRect().top + scrollY;

        if (scrollY > loadMapBlockPosition - windowHeight) {
            const loadMapUrl = loadMapBlock.dataset.map;

            if (loadMapUrl) {
                loadMapBlock.insertAdjacentHTML(
                    "beforeend",
                    `<iframe src="${loadMapUrl} style="border: 0;" allowfullscreen="" loading="lazy"></iframe>`
                );
                loadMapBlock.classList.add('_loaded');
            }
        }
    }

    //? нескінченна прокрутка
    function loadMore() {
        const loadMoreBlockPosition = loadMoreBlock.getBoundingClientRect().top + scrollY;
        const loadMoreBlockHeight = loadMoreBlock.offsetHeight;

        if (scrollY > (loadMoreBlockPosition + loadMoreBlockHeight) - windowHeight) {
            getContent();
        }
    }

    async function getContent() {
        if (!document.querySelector('._loading-icon')) {
            loadMoreBlock.insertAdjacentHTML(
                "beforeend",
                `<div class="_loading-icon"></div>`
            );
        }

        loadMoreBlock.classList.add('_loading');

        let response = await fetch('_loadMore.html', {  //? вказати потрібний файл із додатковим контентом
            method: "GET",
        });

        if (response.ok) {
            let result = await response.text();
            loadMoreBlock.insertAdjacentHTML("beforeend", result);
            loadMoreBlock.classList.remove('_loading');

            if (document.querySelector('._loading-icon')) {
                document.querySelector('._loading-icon').remove();
            }
        } else {
            alert('Помилка!!!');
        }
    }
}