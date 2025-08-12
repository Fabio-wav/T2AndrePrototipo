document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Cria overlay e menu mobile
  const overlay = document.createElement("div");
  overlay.classList.add("mobile-overlay");
  overlay.id = "mobile-overlay";

  const menu = document.createElement("div");
  menu.classList.add("mobile-menu");
  menu.id = "mobile-menu";

  // Clona os links da navbar para o menu mobile
  const links = navbar.querySelectorAll("a");
  links.forEach(link => {
    const clone = link.cloneNode(true);
    menu.appendChild(clone);
  });

  // Cria botão hamburguer
  const hamburger = document.createElement("div");
  hamburger.innerHTML = "☰";
  hamburger.classList.add("hamburger-icon");

  navbar.prepend(hamburger);
  document.body.appendChild(overlay);
  document.body.appendChild(menu);

  const toggleMenu = () => {
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
