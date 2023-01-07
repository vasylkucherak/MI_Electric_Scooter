//* Таб характеристик

export default function securityTab() {
    const securityTab = document.querySelector('.security__tab');
    const tabs = securityTab.querySelectorAll('.tab__item');
    const images = securityTab.querySelectorAll('.tab__img');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('_active');
            });
            images.forEach(img => {
                img.classList.remove('_active');
            });
            tab.classList.add('_active');
            setTimeout(()=> {
                images[tab.dataset.id - 1].classList.add('_active');
            }, 200);
        });
    });
}