//* Інфорація про загальні плагіни
import replace from 'gulp-replace'; //? плагін пошуку і заміни
//import plumber from 'gulp-plumber'; //? плагін обробки помилок
//import notify from 'gulp-notify'; //? плагін повідомлень (підказок)
import browsersync from 'browser-sync'; //? плагін локального сервера
import newer from 'gulp-newer'; //? перевірка оновлень
import rename from 'gulp-rename'; //? модуль для редагування назви файлу
import ifPlugin from 'gulp-if'; //? модуль умовної гілки

//* Експорт об'єкта із плагінами
export const plugins = {
    replace: replace,
    //plumber: plumber,
    //notify: notify,
    browsersync: browsersync,
    newer: newer,
    rename: rename,
    if: ifPlugin
}