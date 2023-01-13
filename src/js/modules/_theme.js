export default function theme() {
    window.addEventListener('load', windowLoad);

    function windowLoad() {
        const htmlBlock = document.documentElement;
        const saveUserTheme = localStorage.getItem('user-theme');

        setTimeout(() => {
            htmlBlock.style.transition = 'all 0.3s';
        }, 300);
        
        let userTheme;

        if (window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            ! saveUserTheme ? changeTheme() : null;
        });

        const themeBtns = document.querySelectorAll('.theme-btn');

        themeBtns.forEach(themeBtn => {
            if (themeBtn) {
                themeBtn.addEventListener('click', function(e) {
                    changeTheme(true);
                    e.target.disabled = true;
                    setTimeout(() => {
                        e.target.disabled = false;
                    }, 1000);
                });
            }
        });

        function setThemeClass() {
            if (saveUserTheme) {
                htmlBlock.classList.add(saveUserTheme);
            } else {
                htmlBlock.classList.add(userTheme);
            }
        }
        setThemeClass();

        function changeTheme(saveTheme = false) {
            let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
            let newTheme;

            if (currentTheme === 'light') {
                newTheme = 'dark';
            } else {
                newTheme = 'light';
            }

            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);

            saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        }
    }
}