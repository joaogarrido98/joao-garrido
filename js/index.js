document.addEventListener('DOMContentLoaded', () => {
    progressTop();

    getYearCopy();

    createTags();

    formVisibility();

    submitEmail();

    submitAnimation();

    progressAnimation();

    scrollChange();

    showMenu();
});

/*
function checkEmail(value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return (true)
    }
    let emailInput = document.getElementById("formEmail")
    let alert = emailInput.nextElementSibling;
    alert.style.opacity = '1';
    alert.innerHTML = "Incorrect Email format";
    return (false)
}
*/
function getYearCopy() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = "©" + year;
}

function progressTop() {
    window.addEventListener('scroll', () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });
}

function createTags() {
    let tags = ["HTML5", "CSS3", "jQuery", "Bootstrap", "Wordpress & Prestashop", "C#", "Beginner Assembly", "Beginner of Node.js", "Notions of python", "mySQL", "mongoDB", "Firebase"];
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

function formVisibility() {
    let letsBuild = document.getElementById("letsBuild");
    let hidden = document.querySelector(".collapse");
    letsBuild.addEventListener('click', (e) => {
        e.preventDefault();
        hidden.classList.toggle("active");
    });
}

function submitEmail() {
    let form = document.getElementById("my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        /*
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
      */
    }
    form.addEventListener("submit", handleSubmit)
}

function submitAnimation() {
    const actionBtn = document.querySelector(".action-btn");
    actionBtn.addEventListener('click', () => {
        actionBtn.classList.add("loading");
        actionBtn.disabled = true;
        setTimeout(() => actionBtn.classList.remove("loading"), 3000);
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


function showMenu() {
    let btn = document.querySelector(".nav-btn");
    let menu = document.querySelector(".nav-links");
    let top = document.querySelector(".top-bar");
    let middle = document.querySelector(".middle-bar");
    let bottom = document.querySelector(".bottom-bar");
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle("actived");
        top.classList.toggle("open");
        middle.classList.toggle("open");
        bottom.classList.toggle("open");
    });
}