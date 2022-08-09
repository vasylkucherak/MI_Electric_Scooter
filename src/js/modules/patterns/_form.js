//* Форма
//? (працює у зв'язці з файлом sendmail.php і плагіном phpmailer)

export default function form({formId, imageInputId, previewId}) {
    const form = document.getElementById(formId);
    const formImg = document.getElementById(imageInputId); // <input type="file"> // [Вибрати файл] Файл не вибрано
    const formPreview = document.getElementById(previewId);

    form.addEventListener('submit', sendForm);

    //* Надсилання форми =================================================================================================================================
    async function sendForm(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form); // Витягування всіх даних полів для вводу

        formData.append('image', formImg.files[0]); // додаємо до даних ще і фотографію

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('(*μ_μ) ...Помилка (×﹏×) ...Error');
                form.classList.remove('_sending');
            }
        } else {
            alert("Заповніть обов'язкові поля");
        }
    }

    //* Валідація форми ==================================================================================================================================
    function formValidate(form) {
        let error = 0;
        let reqInputs = document.querySelectorAll('._req'); // змінна із обов'язковими полями для введення <input required>

        for (let i = 0; i < reqInputs.length; i++) {
            const reqInput = reqInputs[i];
            formRemoveError(reqInput);

            if (reqInput.classList.contains('_email')) {
                if (emailTest(reqInput)) {
                    formAddError(reqInput);
                    error++;
                }
            } else if (reqInput.getAttribute("type") === "checkbox" && reqInput.checked === false) {
                formAddError(reqInput);
                error++;
            } else {
                if (reqInput.value === '') {
                    formAddError(reqInput);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    //* Прев'ю вибраних зображень ========================================================================================================================
    formImg.addEventListener('change', () => {
        uploadFile(formImg.files[0]);
    });

    function uploadFile(file) {
        //? Перевірка типу файла
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Дозволені тільки фотографії.');
            formImg.value = '';
            return;
        }
        //? Перевірка розміру файла
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл повинен бути менше 2 МБ.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="selected file">`;
        };
        reader.onerror = function(e) {
            alert('(*μ_μ) ...Помилка (×﹏×) ...Error');
        };
        reader.readAsDataURL(file);
    }
}

//* Технічні класи:
//? ._req - обов'язкові для заповнення поля введення
//? ._email - поля для вказування електронної пошти
//? ._error - для полів введення котрі не пройшли валідацію
//? ._sending - період надсилання даних

//TODO: Доробити випливаючі повідомлення про успішне надсилання форми або помилки і створити змінні для витягування цих елементів з DOM структури