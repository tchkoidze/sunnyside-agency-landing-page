const menuBtn = document.querySelector(".menu-btn");
const mobileNavBox = document.querySelector(".mobile-nav-box");
const H1 = document.querySelector("h1");
const mainContainer = document.querySelector(".main-container");

menuBtn.addEventListener("click", () => {
  mobileNavBox.classList.toggle("show-menu");
  H1.classList.toggle("hide");
  mainContainer.classList.toggle("hide-mainn-container");
});
