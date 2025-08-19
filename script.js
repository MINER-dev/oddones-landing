document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const body = document.body;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("menu-open"); // prevent scrolling when open
  });

  // Close menu when clicking a link
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });
});
