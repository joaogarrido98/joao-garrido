document.addEventListener("DOMContentLoaded", () => {
    createTags();

    window.addEventListener('scroll', slideUp);

    document.addEventListener("scroll", function () {
        const animatedBoxes = document.getElementsByClassName("animated");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;
            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass("fadeInLeft", animatedBox);
            }
        });
    });
});

function createTags() {
    let tags = ["Html", "Css", "jQuery", "Bootstrap", "Android", "Ktor", "Wordpress & Prestashop", "C#", "Beginner Assembly", "Notions of python", "mySQL", "mongoDB", "Firebase"];
    tags.forEach(element => {
        let ul = document.querySelector(".tags");
        let li = document.createElement('li');
        let tag = document.createElement('div');
        tag.className = "tag";
        tag.innerHTML = element;
        li.appendChild(tag);
        ul.appendChild(li);
    });
}

function addClass(extraClass, element) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(extraClass) === -1) {
        element.classList.add(extraClass);
    }
}


function slideUp() {
    let elements = document.querySelectorAll('.anim');
    let windowHeight = window.innerHeight;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('slideUp');
        }
    }
}