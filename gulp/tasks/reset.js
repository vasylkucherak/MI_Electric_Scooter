//* Оновлення файлів у папці з результатом

import del from 'del'; //? модуль для видалення файлів

export const reset = () => {
    return del(app.path.clean); //? (clean: distFolder)
}