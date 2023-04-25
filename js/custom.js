window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed-menu');
    } else {
        nav.classList.remove('fixed-menu');
    }
});

$(window).scroll(function() {
    if (window.pageYOffset > 100) {
        $('.scroll-top').css({
            'opacity' : '1',
        });
    } else {
        $('.scroll-top').css({
            'opacity' : '0',
        });
    };
});
$('.scroll-top').click(function() {
    $('html, body').scrollTop('slow');
});