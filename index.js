// Preloader setting
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Add fixed nav when scrolling
const navbar = document.getElementById("nav_styles");
const header = document.getElementById("header_styles");
const nav_container = document.getElementById("nav-container");
const toggler_button = document.getElementById("toggler");
const social_media_icons = document.getElementsByClassName("social-icons");

scrolling();

// Scrolling event
function scrolling() {
  let click = false;
  toggler_button.addEventListener("click", function () {
    if (click == false) {
      click = true;
    } else {
      click = false;
    }
  });
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const heightSum =
      // getBoundingClientRect()： returns size of an element relative to the
      // viewport (Responsive Design)
      navbar.getBoundingClientRect().height +
      header.getBoundingClientRect().height;

    if (scrollHeight > heightSum && this.window.innerWidth >= 1024) {
      if (click == false) {
        toggler_button.click();
        click = true;
      }
      navbar.style.position = "fixed";
      navbar.style.top = "40%";
      navbar.style.width = "8.8rem";
      navbar.classList.remove("navbar-expand-lg");
      navbar.classList.add("flex-column");
      nav_container.classList.remove("container-fluid");
      displayChevron(scrollHeight);
    } else {
      if (click == true) {
        toggler_button.click();
        click = false;
      }
      navbar.style.position = "relative";
      navbar.style.top = "0%";
      navbar.style.width = "100%";
      navbar.classList.remove("flex-column");
      navbar.classList.add("navbar-expand-lg");
      nav_container.classList.add("container-fluid");
      displayChevron(scrollHeight);
    }
  });

  // displays back-to-top icon in biography
  function displayChevron(scrollHeight) {
    const icon = document.querySelector(".icon__container");
    if (scrollHeight > 1000) {
      icon.classList.add("icon__display");
    } else {
      icon.classList.remove("icon__display");
    }
  }
}
