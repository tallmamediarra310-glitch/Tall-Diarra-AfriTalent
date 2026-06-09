// commit 6
document.addEventListener("DOMContentLoaded", () => {

  // DARK MODE (FIX COMPLET)
  const darkBtn = document.getElementById("darkToggle");

  // Charger le thème sauvegardé
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  //  Toggle + sauvegarde
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

    });
  }

  // NAVBAR SCROll
  const navbar = document.querySelector(".navbar");

  if (navbar) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }

    });

  }

  // BACK TO TOP SAFE
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    backToTop.onclick = () =>
      window.scrollTo({ top: 0, behavior: "smooth" });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  }

});

