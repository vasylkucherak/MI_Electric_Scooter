//* Запуск локального сервера і оновлення його при будь-яких змінах у файлах

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.dist.html}` //? базова папка звідки запускати сервер
        },
        notify: false, //? забираємо повідомлення у браузері
        port: 3000, //? порт для локального сервера
    });
}