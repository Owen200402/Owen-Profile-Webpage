// Preloader setting
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});

// Add fixed nav when scrolling
const navbar = document.getElementById("nav_styles");
const header = document.getElementById("header_styles");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const heightSum =
    navbar.getBoundingClientRect().height +
    header.getBoundingClientRect().height;

  if (scrollHeight > heightSum) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.right = 0;
    navbar.style.width = "30%";
  } else {
    navbar.style.position = "relative";
    navbar.style.width = "100%";
  }

  // display back-to-top icon in biography
  const icon = document.querySelector(".icon__container");
  if (scrollHeight > 1000) {
    icon.classList.add("icon__display");
  } else {
    icon.classList.remove("icon__display");
  }
});
