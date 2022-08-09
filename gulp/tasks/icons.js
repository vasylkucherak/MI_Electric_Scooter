//* Копіювання іконок із джерела до папки з результатом

import webp from 'gulp-webp';  //? модуль, який форматує іконки в .webp
import imagemin from 'gulp-imagemin'; //? модуль, який мінімізує іконки

export const icons = () => {
    return app.gulp.src(app.path.src.icons)
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'ICONS',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(app.plugins.newer(app.path.dist.icons)) //? перевірка іконок в папці із результатом, щоб обробляти тільки ті іконки, котрі змінились або яких не було
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                webp() //? створення WEBP іконок
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.gulp.dest(app.path.dist.icons) //? вигрузка .webp іконок в ./dist/icons
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.gulp.src(app.path.src.icons) //? знову взяти іконки з джерела
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                app.plugins.newer(app.path.dist.icons) //? знову перевірити іконки в ./dist/icons
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild, //? якщо в режимі Build
                imagemin({ //? мінімізуємо іконки
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3 //* 0 to 7
                })
            )
        )
        .pipe(app.gulp.dest(app.path.dist.icons)) //? вигружаємо оптимізовані звичайні іконки в ./dist/icons
        .pipe(app.gulp.src(app.path.src.svgIcons)) //? беремо .svg іконки з ./src/icons
        .pipe(app.gulp.dest(app.path.dist.icons)) //? вигружаємо .svg іконки в ./dist/icons
        .pipe(app.plugins.browsersync.stream());
}