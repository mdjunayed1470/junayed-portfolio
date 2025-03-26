document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav_link");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
