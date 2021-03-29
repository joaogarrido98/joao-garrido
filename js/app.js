document.addEventListener('DOMContentLoaded', () => {
    progressAnimation();

    scrollChange();

    showMenu();

    closeOnChoice();

    progressTop();
});


function progressTop() {
    window.addEventListener('scroll', () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });
}


function progressAnimation() {
    document.addEventListener("scroll", function (event) {
        const animatedBoxes = document.getElementsByClassName("animated");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "fadeInLeft");
            }
        });
    });
}

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

function scrollChange() {
    const nav = document.querySelector('.nav')
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            nav.style.backgroundColor = 'var(--color-nav)';
            nav.style.boxShadow = '0 20px 25px -15px rgba(0, 0, 0, .6)'
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });
}

function menuToggle() {
    let menu = document.querySelector(".nav-links");
    let top = document.querySelector(".top-bar");
    let middle = document.querySelector(".middle-bar");
    let bottom = document.querySelector(".bottom-bar");
    menu.classList.toggle("actived");
    top.classList.toggle("open");
    middle.classList.toggle("open");
    bottom.classList.toggle("open");
}

function showMenu() {
    let btn = document.querySelector(".nav-btn");
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        menuToggle();
    });
}


function closeOnChoice() {
    [...document.querySelectorAll('.pages')]
        .forEach(div => {
            div.addEventListener('click', () => {
                menuToggle();
            });
        });
}