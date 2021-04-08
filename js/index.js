document.addEventListener('DOMContentLoaded', () => {
    getYearCopy();

    createTags();

    getActiveMenu();

    left();

    tabManage();

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

    document.querySelector("#right").addEventListener('click', () => {
        document.getElementById('row').scrollLeft += 500;
    });

    document.querySelector("#left").addEventListener('click', () => {
        document.getElementById('row').scrollLeft -= 500;
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

function getProjects() {
    let url = "https://joaogarrido98.github.io/joao-garrido";
    let carousel = document.querySelector(".carousel-inner");
    carousel.innerHTML = "";
    fetch(url + '/json/projects.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            let projects = data["projects"];
            let i, title;
            for (i in projects) {
                if (projects.hasOwnProperty(i)) {
                    title = i;
                }
                let project = projects[i];
                let img = project["preview"][0];
                let gif = project["preview"][1];
                let card = `<div class="tile__media">
                  <div class="img-back" style="background-image: url('${url}/resources/${gif}');"><img class="tile__img" src="${url}/resources/${img}" alt="${title}"/></div>
                </div>
                <div class="tile__details">
                  <div class="tile__title">
                    ${title}
                  </div>
                  <div>
                  <a href="projects.html?project=${title}">Know More</a>
                  </div>
                </div>`;
                const ele = document.createElement('div');
                ele.innerHTML = card;
                ele.className = "tile";
                carousel.appendChild(ele);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function tabManage() {
    let tabs = document.getElementsByClassName('tab');
    Array.prototype.forEach.call(tabs, function (tab) {
        tab.addEventListener('click', (evt) => {
            setActiveClass(evt, tabs);
        });
    });
   
}

function setActiveClass(evt, tabs) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('chosen');
	});
	evt.currentTarget.classList.add('chosen');
    getProjects();
}