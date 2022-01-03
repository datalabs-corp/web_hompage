const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
const slideCountNumber = document.querySelector(".slide__count");
const slideGaugeValue = document.querySelector(".slide__gauge__value");
let currentIdx = 0;
let slideCount = slideImg.length;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slideWidth = window.outerWidth;
let slideMargin = 100;
let resizeTimer = null;

const makeClone = () =>{
  let cloneSlide_first = slideImg[0].cloneNode(true); //slideImg.firstElementChild.cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first); 
  slides.insertBefore(cloneSlide_last,slides.firstElementChild);
}

const initfunction = () => {
  slides.style.width = (slideWidth + slideMargin) * (slideCount+2) + "px";
  slides.style.left = -(slideWidth + slideMargin) + "px";
}

const rightSlide = () => {
  if (currentIdx <= slideCount-1) {
    slides.style.left = -(currentIdx+2) * (slideWidth+slideMargin) + "px";
    slides.style.transition = `${1}s ease-out`;
  }if (currentIdx === slideCount-1){
    setTimeout(function(){
      slides.style.left = -(slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    },1000);
    currentIdx = -1;
    } 
  currentIdx += 1;
  slideCountNumber.textContent = `0${currentIdx + 1}`;
  slideGaugeValue.style.width = `${(currentIdx + 1) * 33}%`;
}

const leftSlide = () => {
  if (currentIdx >= 0) {
    slides.style.left = -(currentIdx) * (slideWidth + slideMargin) + "px";
    slides.style.transition = `${1}s ease-out`;
  }if (currentIdx === 0){
    setTimeout(function(){
      slides.style.left = -(slideCount) * (slideWidth + slideMargin)+ "px";
      slides.style.transition = `${0}s ease-out`;
    },1000);
    currentIdx = slideCount;
    } 
  currentIdx -= 1;
  slideCountNumber.textContent = `0${currentIdx + 1}`
  slideGaugeValue.style.width = `${(currentIdx + 1) * 33}%`;
}

next.addEventListener('click', rightSlide);
prev.addEventListener('click', leftSlide);

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer  = setTimeout(() => {
    slideWidth = window.outerWidth;
    initfunction();
  }, 400)
}, { passive: true });

makeClone();
initfunction();

setInterval(() => {
  rightSlide()
}, 5000);