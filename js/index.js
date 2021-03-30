document.addEventListener('DOMContentLoaded', () => {
    getYearCopy();

    createTags();

    formVisibility();

    submitEmail();

    submitAnimation();

    getActiveMenu();

    handleInputEmail();

    handleInputName();
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

function handleInputEmail() {
    let emailInput = document.querySelector("#email");
    emailInput.addEventListener('input', (evt) => {
        const value = evt.target.value;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if(value !== ""){
            if (emailRegex.test(value.trim())) {
                evt.target.classList.add('valid');
                evt.target.classList.remove('invalid');
                return true;
            } else {
                evt.target.classList.add('invalid');
                evt.target.classList.remove('valid');
                return false;
            }
        }else{
            return false;
        }
        
    });
}

function handleInputName(){
    let nameInput = document.querySelector("#name");
    nameInput.addEventListener('input', (evt) => {
        const value = evt.target.value;
        if(value === ""){
            evt.target.classList.remove('valid');
            evt.target.classList.add('invalid');
            return false;
        }else{
            evt.target.classList.add('valid');
            evt.target.classList.remove('invalid');
            return true;
        }
    });
}