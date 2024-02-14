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

// import "./modules/gallery-fauna";

const galleryContainer = document.querySelector(".gallery-items");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el) => {
            el.classList.remove("gallery-item-1");
            el.classList.remove("gallery-item-2");
            el.classList.remove("gallery-item-3");
            el.classList.remove("gallery-item-4");
            el.classList.remove("gallery-item-5");
            el.classList.remove("gallery-item-6");
            el.classList.remove("gallery-item-7");
            el.classList.remove("gallery-item-8");
            el.classList.remove("gallery-item-9");
        });

        this.carouselArray.slice(0, 9).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === "gallery-controls-previous") {
            this.carouselArray.unshift(...this.carouselArray.splice(-1));
        } else {
            this.carouselArray.push(...this.carouselArray.splice(0, 1));
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const existingButton = document.querySelector(
                `.gallery-controls-${control}`
            );
            if (existingButton) {
                existingButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.setCurrentState(existingButton);
                });
            }
        });
    }

    useControls() {
        const triggers = Array.from(
            galleryControlsContainer.getElementsByClassName(
                "gallery-controls-previous"
            ),
            galleryControlsContainer.getElementsByClassName(
                "gallery-controls-next"
            )
        );
        triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();

