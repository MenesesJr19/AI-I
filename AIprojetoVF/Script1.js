// JavaScript source code
const slides = document.querySelectorAll(".slide");
const esq = document.querySelector(".s_esq");
const dir = document.querySelector(".s_dir");

let curSlide = 0;
const maxSlide = slides.length;

const irParaSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const proxSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    irParaSlide(curSlide);
};

const slideAnterior = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    irParaSlide(curSlide);
};

irParaSlide(0);

esq.addEventListener("click", slideAnterior);
dir.addEventListener("click", proxSlide);

const timer = async function () {
    setTimeout(function () {
        proxSlide();
        timer();
    }, 4500);
};

timer();
