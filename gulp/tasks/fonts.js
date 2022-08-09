//* Конвертування шрифтів і автоматичне підключення в CSS

import fs from 'fs'; //? модуль встроїний в gulp котрий дозволяє працювати з файловою системою
import fonter from 'gulp-fonter';  //? переводить шрифти з формату .otf в формат .ttf i .woff
import ttf2woff2 from 'gulp-ttf2woff2'; //? переводить шрифти з формату .ttf2 в формат .woff2

//* конвертація з .otf в .ttf
export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}) //? отримуємо доступ до файлів .otf в ./src/fonts
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(fonter({
            formats: ['ttf'] //? форматуємо в .ttf формат
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))  //? вигружаємо в ./src/fonts
}

//* конвертація з .ttf в .woff
export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}) //? отримуємо доступ до файлів .ttf в ./src/fonts
        /* .pipe(app.plugins.plumber(   //? обробка помилок
            app.plugins.notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(fonter({
            formats: ['woff'] //? форматуємо в .woff формат
        }))
        .pipe(app.gulp.dest(`${app.path.dist.fonts}`))  //? вигружаємо в ./dist/fonts
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)) //? шукаємо файли шрифтів .ttf в ./src/fonts
        .pipe(ttf2woff2()) //? конвертуємо в .woff2
        .pipe(app.gulp.dest(`${app.path.dist.fonts}`))  //? вигружаємо в ./dist/fonts
}

//* підключення файлів шрифтів в файл стилів
export const fontStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/base/_fonts.scss`; //? шлях до файлу стилів підключення шрифтів
    fs.readdir(app.path.dist.fonts, function (err, fontsFiles) {  //? перевіряємо чи існують взагалі файли шрифтів
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) { //? перевіряємо чи існує файл стилів для підключення шрифтів 
                fs.writeFile(fontsFile, '', cb); //? якщо файла немає, створюємо його
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) { //? пробігаємо всі файли шрифтів
                    let fontFileName = fontsFiles[i].split('.')[0]; //? записуємо підключення шрифтів в файл стилів
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 400;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                console.log('Файл ./scss/base/fonts.scss вже існує. Для оновлення файла потрібно його видалити')
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`) //? отримуємо доступ до файлів в ./src/fonts
    function cb() { }
}