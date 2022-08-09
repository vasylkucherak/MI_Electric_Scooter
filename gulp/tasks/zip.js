//* Архівування готових файлів

import del from 'del'; //? модуль для видалення файлів
import zipPlugin from 'gulp-zip'; //? модуль для архівування файлів

export const zip = () => {
    del(`./${app.path.rootFolder}.zip`); //? видаляємо попередній .zip архів (якщо він є)
    return app.gulp.src(`${app.path.distFolder}/**/*.*`, {}) //? отримуємо всі файли із ./dist
        /* .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'ZIP',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`)) //? створення архіву із назвою як у корінної папки
        .pipe(app.gulp.dest('./'))
}