document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");
  const top = document.querySelector(".top");
  menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times");
    header.classList.toggle("toggle");
  });

  window.addEventListener("scroll", function () {
    menu.classList.remove("fa-times");
    header.classList.remove("toggle");

    if (window.pageYOffset > 0) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  });

  window.addEventListener("load", function () {
    if (window.pageYOffset > 0) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  });
});

document.querySelectorAll('a[href*="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");

    const targetElement = document.querySelector(target);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const existingLink = document.getElementById("existingLink");
existingLink.href = "./directory/CV-Nguyen-Van-Binh-CV.vn.pdf";
existingLink.download = "CV-Nguyen-Van-Binh-CV.vn.pdf";
