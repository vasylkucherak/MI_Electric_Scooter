//* Копіювання файлів PHP із джерела до папки з результатом

export const php = () => {
    return app.gulp.src(app.path.src.php)
        .pipe(app.gulp.dest(app.path.dist.php))  //? destination (з англ. "шлях призначення")
}