//* Копіювання файла index.html із джерела до папки з результатом

import fileInclude from 'gulp-file-include'; //? збирає модулі в один файл
import webpHtmlNosvg from 'gulp-webp-html-nosvg'; //? модуль, який підключає окрім даного формату фото ще і формат .webp
import versionNumber from 'gulp-version-number'; //? модуль, який не дозволяє кешувати файли в браузері
import htmlmin from 'gulp-htmlmin'; //? модуль, що мінімізує

export const html = () => {
    return app.gulp.src(app.path.src.html)
        /* .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(fileInclude()) //? запуск функції, яка збирає @include
        .pipe(app.plugins.replace(/@img\//g, 'img/')) //? запуск функції, яка шукає і замінює шляхи для img
        .pipe(app.plugins.replace(/@icon\//g, 'icons/')) //? запуск функції, яка шукає і замінює шляхи для icon

        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                webpHtmlNosvg()  //? запуск функції, яка підключає фото формату .webp
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                versionNumber({
                    'value': '%DT%', //? додавання до адреси стилів і js-файлів поточної дати і часу
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js',
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json' //? створюватиметься файл varsion.json де зберігатиметься ключ із дати і часу
                    }
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                htmlmin({ collapseWhitespace: true }) //? зжаття файлів .html
            )
        )
        /* .pipe(app.plugins.rename({
            extname: '.min.html' /? переіменування файлів .html
        })) */
        .pipe(app.gulp.dest(app.path.dist.html))  //? destination (з англ. "шлях призначення")
        .pipe(app.plugins.browsersync.stream()); //? виконання оновлення локального сервера
}