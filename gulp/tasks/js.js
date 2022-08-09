//* Збирання файлів js і переміщення його із джерела до папки з результатом

import webpack from 'webpack-stream' //? збирає модулі в один файл

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev }) //? отримуємо доступ до файлу (якщо в режимі розробника, то також додаємо карту джерела, щоб бачити у якому файлі був написаний конкретний скрипт)
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development', //? режим "продакшн" або "розробника" 
            output: {
                filename: 'script.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.dist.js))
        .pipe(app.plugins.browsersync.stream());
}