const menu = document.getElementById("menu");
const menuItems = document.getElementById("items-home-menu");

menu.addEventListener("click", () => {
  if (menuItems.style.display === "none") {
    menu.style.zIndex = "2";
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }

  if (window.innerWidth >= 1000 && menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  }
});

function SwitchThemes() {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
}

// Intro Animation
const intro = document.querySelector(".intro");
const logoHeader = document.querySelector(".logo-header");
const logo = document.querySelector(".logo");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      logo.classList.add("fadeIn");
    }, 600);

    setTimeout(() => {
      logo.classList.remove("fadeIn");
      logo.classList.add("fadeOut");
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000 && menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));
