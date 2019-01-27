import "../scss/app.scss";
import "../pug/index.pug";
import "@babel/polyfill";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const elements = {
  navBkg: document.querySelector(".navigation__background"),
  nav: document.querySelector(".navigation__nav"),
  navBtn: document.querySelector(".menu"),
  modal: document.querySelector(".popup"),
  closeModalBtn: document.querySelector(".popup__close-btn"),
  openModalBtn: document.querySelector(".modalBtn")
};

//elements.navBtn.addEventListener("click", revealNavMenu);
elements.openModalBtn.addEventListener("click", openModal);
elements.closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

// function revealNavMenu() {
//   elements.navBkg.classList.toggle("navigation__background--active");
//   elements.nav.classList.toggle("navigation__nav--active");
// }

function openModal() {
  elements.modal.classList.add("popup--active");
}

function closeModal() {
  elements.modal.classList.remove("popup--active");
}

function clickOutside(e) {
  if (e.target == elements.modal) {
    elements.modal.classList.remove("popup--active");
  }
}
