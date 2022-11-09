// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
    nav.classList.add("transparent-nav");
  } else {
    header.classList.remove("nav-fixed");
    nav.classList.remove("transparent-nav");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
