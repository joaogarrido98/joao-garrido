document.addEventListener('DOMContentLoaded', () => {
    getYearCopy();

    createTags();

    formVisibility();

    submitEmail();

    submitAnimation();
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
