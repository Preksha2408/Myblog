
//Event-lsitener being added to the sunrise button on the top-right corner of the page//
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = './assets/images/moon.png';
    } else {
        themeIcon.src = './assets/images/sunrise.png';
    }
});

