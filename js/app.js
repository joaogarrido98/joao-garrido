document.addEventListener('DOMContentLoaded', () => {
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

function scrollChange() {
    const nav = document.querySelector('.nav')
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            nav.style.backgroundColor = 'var(--color-dark)';
        } else {
            nav.style.backgroundColor = 'transparent';
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
