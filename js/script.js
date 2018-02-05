$(function() {
    if ($('.swiper-container').length ) {
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: {
                delay: 5000,
            },
            slidesPerView: $(window).width() >= 768 ? 4 : 2,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: true,
            navigation: {
                prevEl: '.swiper-left',
                nextEl: '.swiper-right',
            },
        });
    }
});