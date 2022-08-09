//* Копіювання фото із джерела до папки з результатом

import webp from 'gulp-webp';  //? модуль, який форматує фото в .webp
import imagemin from 'gulp-imagemin'; //? модуль, який мінімізує фото

export const img = () => {
    return app.gulp.src(app.path.src.img)
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'IMG',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(app.plugins.newer(app.path.dist.img)) //? перевірка картинок в папці із результатом, щоб обробляти тільки ті фото, котрі змінились або яких не було
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                webp() //? створення WEBP зображення
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.gulp.dest(app.path.dist.img) //? вигрузка .webp фото в ./dist/img
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.gulp.src(app.path.src.img) //? знову взяти фото з джерела
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.plugins.newer(app.path.dist.img) //? знову перевірити картинки в ./dist/img
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                imagemin({ //? мінімізуємо фото
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3 //* 0 to 7
                })
            )
        )
        .pipe(app.gulp.dest(app.path.dist.img)) //? вигружаємо оптимізовані звичайні картинки в ./dist/img
        .pipe(app.gulp.src(app.path.src.svgImg)) //? беремо .svg фото з ./src/img
        .pipe(app.gulp.dest(app.path.dist.img)) //? вигружаємо .svg картинки в ./dist/img
        .pipe(app.plugins.browsersync.stream());
}