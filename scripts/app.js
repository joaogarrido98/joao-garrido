document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const element = document.body;

    hamburger.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            element.classList.toggle("lock-scroll");
        } else {
            hamburger.classList.add("active");
            navMenu.classList.add("active");
            element.classList.toggle("lock-scroll");
        }
    });

    const date = new Date();
    document.getElementById("year").innerHTML = "©" + date.getFullYear();
});
