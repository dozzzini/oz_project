const slides = document.querySelector(".container2");
const slideImg = document.querySelectorAll(".container2 div");

let currentIdx = 0;

const SlideCount = slideImg.length;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const slideWidth = 400;
const slideMargin = 20;

slides.style.width = (slideWidth + slideMargin) * SlideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 420 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) {
    moveSlide(currentIdx - 1);
  }
});

next.addEventListener("click", function () {
  if (currentIdx !== SlideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
