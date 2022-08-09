//* Індикатор прокрутки

export default function scrollBar() {

    window.onscroll = function() {progressBar()};

    function progressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("bar").style.height = scrolled + "%";
    }
}