const openMenuButton = document.querySelector(".menu-open-btn");
const closeMenuButton = document.querySelector(".menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu-link");

function openMenu() {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("menu-open");

  openMenuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");

  openMenuButton.setAttribute("aria-expanded", "false");
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
