import gulp from 'gulp'; //? Основний модуль

import { path } from './gulp/config/path.js'; //? Імпорт шляхів
import { plugins } from './gulp/config/plugins.js'; //? Імпорт загальних плагінів

//* Передаємо значення в глобальну змінну
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins
}

//* Імпорт завдань (gulp/tasks/*.js)
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { icons } from "./gulp/tasks/icons.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { php } from "./gulp/tasks/php.js";

//* Наглядач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.icons, icons);
    gulp.watch(path.watch.php, php);
}

//* Почергова обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

//* Побудова сценаріїв виконання завдань
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, img, icons, php)); //? Основні завдання, котрі виконуються одночасно
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); //? Завдання, котрі виконуються один за одним в режимі "розробника"
const build = gulp.series(reset, mainTasks); //? Завдання, котрі виконуються один за одним в режимі "продакшн"
const deployZIP = gulp.series(reset, mainTasks, zip); //? Завдання, котрі виконуються один за одним в режимі "створення архіву"
const deployFTP = gulp.series(reset, mainTasks, ftp); //? Завдання, котрі виконуються один за одним в режимі "вигрузки результату на ftp сервер"

//* Експорт сценаріїв
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//* Виконання завдання за замовчуванням
gulp.task('default', dev);