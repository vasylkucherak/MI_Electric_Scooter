//* Плавний скрол при при переході по ссилці (локальній)

export default function scrollOnLinks({linksAttribue = '[href^="#"]', scrollSpeed = 0.2}) {

    const links = document.querySelectorAll(linksAttribue); // або по [data-link]
    const speed = scrollSpeed; // із збільшенням значення швидкість зменшується
    
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                
                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    };
}