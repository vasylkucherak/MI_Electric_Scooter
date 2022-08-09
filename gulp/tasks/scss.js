//* Конвертування файлів scss в style.min.css і переміщення його із джерела до папки з результатом

import dartSass from 'sass'; //? компілятор SASS
import gulpSass from 'gulp-sass'; //? модуль для запуску SASS 
import cleanCss from 'gulp-clean-css'; //? зжаття .css файла
import webpcss from 'gulp-webpcss'; //? вивід WEBP зображень
import autoprefixer from 'gulp-autoprefixer'; //? додавання вендорних префіксів (для кращої кросбраузерності)
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //? групування медіа запитів

const sass = gulpSass(dartSass); //? виклик із плагіну SASS із переданням компілятора

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursemaps: app.isDev }) //? отримуємо доступ до файлу (якщо в режимі розробника, то також додаємо карту джерела, щоб бачити у якому файлі був написаний конкретний стиль)
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(app.plugins.replace(/@img\//g, '../img/')) //? обробка alias-ів (псевдонімів)
        .pipe(app.plugins.replace(/@icon\//g, '../icons/')) //? обробка alias-ів (псевдонімів)
        .pipe(sass({
            outputStyle: 'expanded' //? вихідний стиль (розширений)
        }))
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                groupCssMediaQueries() //? групування медіазапитів
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                webpcss(
                    {
                        webpClass: '.webp', //? якщо браузер підтримує .webp, додамо клас '.webp'
                        noWebpClass: '.no-webp' //? якщо браузер НЕ підтримує .webp, додамо клас '.no-webp'
                    }
                ) //? створення WEBP зображення
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                autoprefixer({
                    grid: true, //? підтримка грідів
                    overrideBrowserslist: ["last 3 versions"], //? останні 3 версії
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                cleanCss() //? зжаття файлу .css
            )
        )
        .pipe(app.plugins.rename({
            extname: '.css' //? переіменування файлу .css
        }))
        .pipe(app.gulp.dest(app.path.dist.css))
        .pipe(app.plugins.browsersync.stream());
}