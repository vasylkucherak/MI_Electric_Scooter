//* відправлення файлів на ftp сервер

import { configFTP } from '../config/ftp.js'; //? конфігураційний файл
import vinylFTP from 'vinyl-ftp'; //? модуль, який відправляє проект на віддалений ftp сервер
import util from 'gulp-util'; //? модуль, який показує хід копіювання файлів на ftp сервер

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnent = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.distFolder}/**/*.*`, {})
        /* .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                message: 'Error: <%= error.message %>'
            }))
        ) */
        .pipe(ftpConnent.dest(`${app.path.ftp}/${app.path.rootFolder}`));
}