const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger__button");
const hamburgerMenu = document.querySelector(".hamburger__menu");

const onChengeNavbar = (flag) => {
  if (flag) {
    navbar.classList.add("on");
  } else {
    navbar.classList.remove("on");
  }
}

const onHamburgerMenu = () => {
  hamburgerMenu.classList.remove("hide");
}

const offHaburgerMenu = () => {
  hamburgerMenu.classList.add("hide");
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    onChengeNavbar(1);
  } else {
    onChengeNavbar(0);
  }
});

hamburger.addEventListener("click", onHamburgerMenu);
hamburgerMenu.addEventListener("click", offHaburgerMenu);