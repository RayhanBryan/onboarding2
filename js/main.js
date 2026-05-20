const navbar = document.querySelector(".mi-navbar");

window.addEventListener("scroll", () => {
  const img = document.querySelector(".mi-logo");
  const arrow = document.querySelector(".mi-navbar-arrow");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    img.src = "assets/logo_color.svg";
    arrow.src = "assets/arrow_down_dark.svg";
  } else {
    navbar.classList.remove("scrolled");
    img.src = "assets/logo.svg";
    arrow.src = "assets/arrow_down.svg";
  }
});

// Dropdown toggle
const dienToggle = document.getElementById("mi-dien-toggle");
const dienDropdown = document.getElementById("mi-dien-dropdown");

dienToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  dienToggle.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!dienToggle.contains(e.target)) {
    dienToggle.classList.remove("open");
  }
});
