document.addEventListener('DOMContentLoaded', () => {
    getYearCopy();

    createTags();

    submitEmail();

    //On scroll progress bar
    window.addEventListener('scroll', () => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });

    formVisibility();

    const actionBtn = document.querySelector(".action-btn");
    actionBtn.addEventListener('click', () => {
        actionBtn.classList.add("loading");
        actionBtn.disabled = true;
        setTimeout(() => actionBtn.classList.remove("loading"), 3000);
    });
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
    let tags = ["Html5", "CSS", "jQuery", "Firebase", "C#", "mySQL", "mongoDB", "Bootstrap", "Wordpress & Prestashop", "Notions of nodeJs", "Notions of python"];
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
    //SHOW/HIDE form
    const letsBuild = document.getElementById("letsBuild");
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close")
    letsBuild.addEventListener('click', () => {
        modal.style.display = "block";
    });
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"
    });
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

function submitEmail(){
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