const introImage = document.querySelector(".technology__img__container");
const introCard = document.querySelector(".intro__card__container");

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

window.addEventListener("scroll", onIntroImage);
window.addEventListener("scroll", onIntroCard);