//* Налаштування шляхів
import * as nodePath from 'path';  //? імпорт модуля path

const rootFolder = nodePath.basename(nodePath.resolve()); //? отримання ім'я корінної папки
const distFolder = './dist'; //? шлях до папки з результатом сайту
const srcFolder = './src';  //? шлях до папки з джерелом сайту

//* об'єкт із шляхами
export const path = {
    dist: {
        js: `${distFolder}/`,
        img: `${distFolder}/img/`,
        icons: `${distFolder}/icons/`,
        css: `${distFolder}/`,
        html: `${distFolder}/`,
        fonts: `${distFolder}/fonts/`,
        files: `${distFolder}/files/`,
        php: `${distFolder}/php/`
    },
    src: {
        js: `${srcFolder}/js/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svgImg: `${srcFolder}/img/**/*.svg`,
        icons: `${srcFolder}/icons/**/*.{jpg,jpeg,png,gif,webp}`,
        svgIcons: `${srcFolder}/icons/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        php: `${srcFolder}/php/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        icons: `${srcFolder}/icons/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        php: `${srcFolder}/php/**/*.*`
    },
    clean: distFolder,
    distFolder: distFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}