// Preloader setting
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});

// Add fixed nav when scrolling
const navbar = document.getElementById("nav_styles");
const header = document.querySelector(".header--entire");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const heightSum =
    navbar.getBoundingClientRect().height +
    header.getBoundingClientRect().height;

  if (scrollHeight > heightSum) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.right = 0;
    navbar.style.width = "28%";
  } else {
    navbar.style.position = "relative";
    navbar.style.width = "100%";
  }
});
