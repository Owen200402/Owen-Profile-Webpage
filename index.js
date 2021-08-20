const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});
