//* Копіювання файлів із джерела до папки з результатом

export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.dist.files))  //? destination (з англ. "шлях призначення")
}