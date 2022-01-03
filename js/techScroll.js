const introImage = document.querySelector(".technology__img__container");
const introCard = document.querySelector(".intro__card__container");
const whitePaper = document.querySelector(".datachain__info__container");

const onIntroImage = () => {
  if (window.pageYOffset >= introImage.getBoundingClientRect().top) {
    document.querySelector(".technology__img").classList.remove("hide");
    window.removeEventListener("scroll", onIntroImage);
  }
}

const onIntroCard = () => {
  if (window.pageYOffset >= introCard.getBoundingClientRect().top) {
    document.querySelector(".intro__card").classList.remove("hide");
    window.removeEventListener("scroll", onIntroCard);
  }
}

const onWhitePaper = () => {
  const target = whitePaper.getBoundingClientRect().top + window.pageYOffset;
  console.log(window.pageYOffset);
  console.log(target);
  if (window.pageYOffset >= target - 500) {
    document.querySelector(".datachain__info").classList.remove("hide");
    window.removeEventListener("scroll", onWhitePaper);
  }
}

window.addEventListener("scroll", onIntroImage);
window.addEventListener("scroll", onIntroCard);
window.addEventListener("scroll", onWhitePaper);