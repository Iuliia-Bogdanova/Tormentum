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
        clickable: true,
    },

    navigation: {
        nextEl: "#sliderNext",
        prevEl: "#sliderPrev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

document.querySelectorAll(".slider-controls__count").forEach((element) => {
    element.addEventListener("click", () => {
        if (swiper.autoplay.running) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    });
});
