const navbar = document.querySelector(".navbar");

const onChengeNavbar = (flag) => {
  if (flag) {
    navbar.classList.add("on");
  } else {
    navbar.classList.remove("on");
  }
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    onChengeNavbar(1);
  } else {
    onChengeNavbar(0);
  }
});