const menuToggle = document.querySelector(".menu-icon img");
const sidebar = document.querySelector("nav.sidebar");
const menuIcon = document.querySelector(".menu-icon");

const toggleMenu = () => {
  sidebar.classList.toggle("open");
  menuIcon.classList.toggle("active");
};

const closeMenu = () => {
  sidebar.classList.remove("open");
  menuIcon.classList.remove("active");
};

menuToggle.addEventListener("click", toggleMenu);
