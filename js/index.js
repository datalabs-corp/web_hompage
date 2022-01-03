// Vision
const visionDescription = document.querySelector(".vision__description");
const visionPage1 = document.querySelector(".vision__page1");
const visionPage2 = document.querySelector(".vision__page2");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
let visionState = true;

const handleChangeVision = () => {
  if (visionState) {
    visionPage1.classList.add("hide");
    visionPage2.classList.remove("hide");
    dot1.classList.remove("dotOn");
    dot2.classList.add("dotOn");
    visionState = false;
  } else {
    visionPage2.classList.add("hide");
    visionPage1.classList.remove("hide");
    dot2.classList.remove("dotOn");
    dot1.classList.add("dotOn");
    visionState = true;
  }
}

// Management
const managements = document.querySelectorAll(".management__page");
const managementContainer = document.querySelector(".management__container");
let managementState = 0;

const handleChangeManagement = () => {
  if (managementState >= 3) {
    managements[managementState].classList.add("hide");
    managementState = 0;
    managements[managementState].classList.remove("hide");
  } else {
    managements[managementState].classList.add("hide")
    managementState++;
    managements[managementState].classList.remove("hide");
  }
}

managementContainer.addEventListener("click", handleChangeManagement);
visionDescription.addEventListener("click", handleChangeVision);

setInterval(() => {
  handleChangeManagement()
},10000);