// const navbar = document.querySelector(".navbar");
const item1 = document.querySelector(".item1__description");
const item2 = document.querySelector(".item2__description");

const handleDescription = () => {
  if (window.pageYOffset > item1.getBoundingClientRect().top + 1000) {
    onChangeItemDesctiption(document.querySelector(".item1__text"));
  }

  if (window.pageYOffset > item2.getBoundingClientRect().top + 1500) {
    onChangeItemDesctiption(document.querySelector(".item2__text"));
    window.removeEventListener("scroll", handleDescription);
  }
}

const onChangeItemDesctiption = (element) => {
    element.classList.remove("hide");
}

window.addEventListener("scroll", handleDescription, { pasive: true });