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
    

  /*  // Form submit validation
    const formName = document.getElementById("formName");
    const formEmail = document.getElementById("formEmail");
    const formText = document.getElementById("formText");
    const form = document.getElementById("form");

    formName.addEventListener('input', function () {
        let alert1 = document.getElementById('alert-1');
        let error = this.value === '';
        showError(alert1, error);
    });
    formEmail.addEventListener('input', function () {
        let alert2 = document.getElementById('alert-2');
        let error = this.value === '';
        showError(alert2, error);
    });
    formText.addEventListener("input", function () {
        let alert3 = document.getElementById('alert-3');
        let error = this.value === '';
        showError(alert3, error);
    });

    form.addEventListener('submit', function (e) {
        let input = document.querySelectorAll('input');
        let textArea = document.querySelectorAll('textarea');
        let checkedEmail = checkEmail(formEmail.value);
        if (formName.value === '' || formEmail.value === '' || formText.value === '' || checkedEmail === false) {
            e.preventDefault();
            for (i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    input[i].nextElementSibling.style.opacity = '1';
                    //input[i].style.backgroundColor = "red";
                    // TODO : PERFORM BETTER VALIDATION
                }
            }
            for (i = 0; i < textArea.length; i++) {
                if (textArea[i].value === '') {
                    textArea[i].nextElementSibling.style.opacity = '1';
                }
            }
        } else {
            e.preventDefault();
            const button = document.querySelector('.submit-button');
            button.classList.add('state-1', 'animated');

            const formData = new FormData(this);
            fetch("php/mail.php", {
                method: 'post',
                body: formData
            }).then((response) => {
                return response.text();
            }).then((text) => {
                if (text === "sent") {
                    button.classList.add('state-2');
                    setTimeout(function () {
                        button.classList.remove('state-1', 'state-2', 'animated');
                        form.reset();
                    }, 2000);
                } else {
                    button.classList.add('state-error');
                    setTimeout(function () {
                        button.classList.remove('state-1', 'state-error', 'animated');
                    }, 2000);
                }
            }).catch((error) => {
                console.log(error);
                button.classList.add('state-error');
                setTimeout(function () {
                    button.classList.remove('state-1', 'state-error', 'animated');
                }, 2000);
            });
        }
    });
});
*/
});

/*function showError(element, error) {
    if (error === true) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
};
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

function formVisibility(){
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
    }
    form.addEventListener("submit", handleSubmit)
}