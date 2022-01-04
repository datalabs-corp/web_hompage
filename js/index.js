const mainTitle = document.querySelector(".main__char__title");
const mainItemContainer = document.querySelector(".main__char__items");
const mainItems = document.querySelectorAll(".main__char__item");

const handleScrollEvent = () => {
  const target = window.pageYOffset + mainItemContainer.getBoundingClientRect().top;

  if (window.pageYOffset >= target - 500) {
    mainTitle.classList.remove("hide");
    mainItems.forEach((item) => {
      item.classList.remove("hide");
    })
  }
}

window.addEventListener("scroll", handleScrollEvent);