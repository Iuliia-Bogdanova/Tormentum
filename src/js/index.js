// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true,
    },

    pagination: {
        el: ".slider-controls__count",
        type: "fraction",
    },

    navigation: {
        nextEl: "#sliderNext",
        prevEl: "#sliderPrev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },

    autoplay: {
        delay:  5000, 
    },
});

