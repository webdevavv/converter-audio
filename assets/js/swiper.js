
const swiper = new Swiper('.indispensable-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.indispensable-pagination',
        clickable: true,

    },

    navigation: {
        nextEl: '.-convert-swiper-next',
        prevEl: '.convert-swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },

        900: {
            slidesPerView: 3,
            spaceBetween: 10

        },
        1200: {
            slidesPerView: 3,
        },
    }


});


const swiperReviews = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    clickable: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10
        },
    },
});


let generatorSwiper = new Swiper(".generator-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // autoplay:true,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 1.5,
        },
        540: {
            slidesPerView: 1.5,
        },
        855: {
            slidesPerView: 2,

        },

        1027: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 4,
        },
    }

});



