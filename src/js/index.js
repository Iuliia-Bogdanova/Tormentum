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

    // keyboard: {
    //     enabled: true,
    // },

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

// Fauna gallery

const galleryContainer = document.querySelector(".gallery-items");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor(container, items, controls, texts) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.carouselTexts = [...texts]; // Новый массив для хранения текстовых блоков
        this.currentIndex = 4; // Начальный индекс
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
        let movedElement;
        if (direction === "previous") {
            // Перемещаем первый элемент в конец массива
            movedElement = this.carouselArray.shift();
            this.carouselArray.push(movedElement);
            this.currentIndex =
                (this.currentIndex - 1 + this.carouselArray.length) %
                this.carouselArray.length;
        } else {
            // Перемещаем последний элемент в начало массива
            movedElement = this.carouselArray.pop();
            this.carouselArray.unshift(movedElement);
            this.currentIndex =
                (this.currentIndex + 1) % this.carouselArray.length;
        }
        this.updateGallery();
        this.showText();
    }

    setControls() {
        this.carouselControls.forEach((control) => {
            const existingButton = document.querySelector(
                `.gallery-controls-${control}`
            );
            if (existingButton) {
                existingButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            }
        });
    }

    showText() {
        this.carouselTexts.forEach((text, index) => {
            text.style.display = index === this.currentIndex ? "block" : "none";
        });
    }
}

const galleryTexts = document.querySelectorAll(".gallery-text");

const exampleCarousel = new Carousel(
    galleryContainer,
    galleryItems,
    galleryControls,
    galleryTexts
);

exampleCarousel.setControls();
exampleCarousel.showText(); 

// Обработчик событий для переключения слайдов с клавиатуры 
document.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowLeft": // Нажата клавиша "Влево"
            exampleCarousel.setCurrentState("previous");
            break;
        case "ArrowRight": // Нажата клавиша "Вправо"
            exampleCarousel.setCurrentState("next");
            break;
        default: // Другие клавиши
            // Ничего не делаем
            break;
    }
});


