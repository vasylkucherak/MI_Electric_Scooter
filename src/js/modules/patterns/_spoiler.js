//* Акордіон

export default function spoiler({spoilerTrigger, acordion = false}) {

    const btns = document.querySelectorAll(spoilerTrigger);

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener('click', function() {
            let cloud = this.classList.contains('active');
            if (acordion) {
                hideAll();
            }
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');

            if (cloud) {
                this.nextElementSibling.style.maxHeight = '0px';
                if (acordion) {
                    this.classList.toggle('active');
                    this.nextElementSibling.classList.toggle('active');
                }
            } else {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            }
        });

        function hideAll() {
            for (let i = 0; i < btns.length; i++) {
                const button = btns[i];
                button.classList.toggle('active', false);
                button.nextElementSibling.classList.toggle('active', false);
                button.nextElementSibling.style.maxHeight = '0px';
            };
        }
    };
}