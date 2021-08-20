// Preloader setting
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});

// Add fixed nav when scrolling
const navbar = document.getElementById("nav_styles");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.style.position = "sticky";
    navbar.style.top = 0;
    navbar.style.width = "100%";
    navbar.style.left = 0;
    navbar.style.zIndex = 999;
  } else {
    navbar.style.position = "relative";
  }
});
