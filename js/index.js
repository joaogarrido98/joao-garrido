document.addEventListener('DOMContentLoaded', () => {
    getYearCopy();

    createTags();

    getActiveMenu();

    left();

    const letsBuild = document.getElementById("letsBuild");
    letsBuild.addEventListener('click', (evt) => {
        evt.preventDefault();
        formVisibility();
    });

    const emailInput = document.querySelector("#email");
    emailInput.addEventListener('input', (evt) => {
        validateEmail(evt.target.value, emailInput);
    });

    const nameInput = document.querySelector("#name");
    nameInput.addEventListener('input', (evt) => {
        validateName(evt.target.value, nameInput);
    });

    const phoneInput = document.querySelector("#phone");
    phoneInput.addEventListener('input', (evt) => {
        validatePhone(evt.target.value, phoneInput);
    });

    const messageInput = document.querySelector("#message");
    messageInput.addEventListener('input', (evt) => {
        validateMessage(evt.target.value, messageInput);
    });

    const form = document.querySelector("#my-form");
    form.addEventListener("submit", submitEmail);

    window.addEventListener('scroll', checkPosition);

    getProjects();

    const state = {};
    const carouselList = document.querySelector('.carousel__list');
    const carouselItems = document.querySelectorAll('.carousel__item');
    const elems = Array.from(carouselItems);

    carouselList.addEventListener('click', function (event) {
        var newActive = event.target;
        var isItem = newActive.closest('.carousel__item');

        if (!isItem || newActive.classList.contains('carousel__item_active')) {
            return;
        };

        update(newActive, elems, state);
    });
});

function getYearCopy() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = "©" + year;
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
    let hidden = document.querySelector(".collapse");
    hidden.classList.toggle("active");
}

function submitEmail(event) {
    event.preventDefault();
    let status = document.querySelector(".status");
    status.style.display = "none";
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message");
    let emailValid = validateEmail(email.value, email);
    let nameValid = validateName(name.value, name);
    let phoneValid = validatePhone(phone.value, phone);
    let messageValid = validateMessage(message.value, message);
    let actionBtn = document.querySelector(".action-btn");
    actionBtn.classList.toggle("loading");
    actionBtn.disabled = true;
    let data = new FormData(event.target);
    if (!emailValid) {
        email.classList.add("invalid");
    }
    if (!nameValid) {
        name.classList.add("invalid");
    }
    if (!phoneValid) {
        phone.classList.add("invalid");
    }
    if (!messageValid) {
        message.classList.add("invalid");
    }
    if (emailValid && nameValid && phoneValid && messageValid) {
        fetch(event.target.action, {
            method: event.target.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            event.target.reset();
            status.style.display = "block";
            status.innerHTML = "Message sent! We will be in contact soon!"
            status.style.backgroundColor = "#3aba6f"
        }).catch(error => {
            status.style.display = "block";
            status.innerHTML = "Something went wrong. Try again later!";
            status.style.backgroundColor = "#f05a5c"
        });
    }
    actionBtn.classList.toggle("loading");
    actionBtn.disabled = false;
}


function getActiveMenu() {
    let nav = document.querySelector(".nav-links");
    let links = nav.getElementsByClassName("pages");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

function validateEmail(value, emailInput) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (value !== "") {
        if (emailRegex.test(value.trim())) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            return true;
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            return false;
        }
    } else {
        return false;
    }
}

function validateName(value, nameInput) {
    if (value === "") {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        return false;
    } else {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        return true;
    }
}

function validatePhone(value, phoneInput) {
    let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    if (value !== "") {
        if (reg.test(value.trim())) {
            phoneInput.classList.add('valid');
            phoneInput.classList.remove('invalid');
            return true;
        } else {
            phoneInput.classList.remove('valid');
            phoneInput.classList.add('invalid');
            return false;
        }
    } else {
        return false;
    }
}

function validateMessage(value, messageInput) {
    if (value === "") {
        messageInput.classList.remove("valid");
        messageInput.classList.add("invalid");
        return false;
    } else {
        messageInput.classList.add("valid");
        messageInput.classList.remove("invalid");
        return true;
    }
}

function left() {
    document.addEventListener("scroll", function () {
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

function checkPosition() {
    let elements;
    let windowHeight;
    elements = document.querySelectorAll('.anim');
    windowHeight = window.innerHeight;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('slideUp');
        }
    }
}

function update(newActive, elems, state) {
    const newActivePos = newActive.dataset.pos;
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel__item_active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

function getPos(current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}

function getProjects() {
    fetch('https://joaogarrido98.github.io/joao-garrido/json/projects.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    )
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            let projects = data["projects"];
            let length = Object.keys(projects).length;
            let i;
            for(i in projects){
                console.log(projects[i]);
                createCard(projects[i]);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function createCard(element){

}