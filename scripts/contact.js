document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const button = document.querySelector(".submit_btn");

    button.addEventListener("click", (evt) => {
        evt.preventDefault();
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        const usernameValid = isNameValid(name);
        const emailValid = isEmailValid(email);
        const messageValid = isMessageValid(message);

        let isFormValid = usernameValid && emailValid && messageValid;
        if (isFormValid) {
            toggleButtonAnimation();
            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const messageValue = message.value.trim();
            postData(nameValue, emailValue, messageValue).then(data => {
                if (data.message === "sent") {
                    form.reset();
                    const inputClass = "input-field";
                    name.className = inputClass;
                    email.className = inputClass;
                    message.className = inputClass;
                    toggleButtonAnimation(true);
                } else {
                    toggleButtonAnimation(false)
                }
            }).catch(err => {
                form.reset();
                const inputClass = "input-field";
                name.className = inputClass;
                email.className = inputClass;
                message.className = inputClass;
                toggleButtonAnimation(false);
            });
        }
    });

    form.addEventListener("input", (evt) => {
        switch (evt.target.id) {
            case "name": isNameValid(evt.target); break;
            case "email": isEmailValid(evt.target); break;
            case "message": isMessageValid(evt.target); break;
        }
    })
});

async function postData(nameValue, emailValue, messageValue) {
    const response = await fetch('https://garrido-email-sender.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            message: messageValue
        })
    });
    return response.json();
}

function toggleButtonAnimation(isDelivered) {
    const button = document.querySelector(".submit_btn");
    if (button.classList.contains("button-loading")) {
        button.disabled = false;
        const button_text = document.querySelector(".button_text");
        if (isDelivered) {
            button.classList.add("sent");
            button_text.innerHTML = "<i class='fa fa-check'></i>";
            normalizeButton();
        } else {
            button.classList.add("not-sent");
            button_text.innerHTML = "<i class='fa fa-times'></i>"
            normalizeButton();
        }
    } else {
        button.disabled = true;
    }
    button.classList.toggle("button-loading");
}

function normalizeButton() {
    const button = document.querySelector(".submit_btn");
    setTimeout(function () {
        if (button.classList.contains("sent")) {
            button.classList.remove("sent");
        } else {
            button.classList.remove("not-sent");
        }
        const button_text = document.querySelector(".button_text");
        button_text.innerHTML = "Send";
    }, 3000);
}

function isEmailValid(email) {
    let emailValue = email.value.trim();
    let valid = false;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = regex.test(emailValue);

    if (emailValue === "" || emailValue === null) {
        showValidity(false, email, "Email cannot be empty.");
    } else if (!test) {
        showValidity(false, email, "Email is not valid - \"example@gmail.com\"");
    } else {
        showValidity(true, email, null);
        valid = true;
    }
    return valid;
};

function isNameValid(name) {
    let nameValue = name.value.trim();
    let valid = false;
    if (nameValue === "" || nameValue === null) {
        showValidity(false, name, "Name cannot be empty.");
    } else if (nameValue.length < 3) {
        showValidity(false, name, "Name is too short.");
    } else {
        showValidity(true, name, null);
        valid = true;
    }
    return valid;
}

function isMessageValid(message) {
    let messageValue = message.value.trim()
    let valid = false;
    if (messageValue === "" || messageValue === null) {
        showValidity(false, message, "Message cannot be empty.");
    } else if (messageValue.length < 80) {
        showValidity(false, message, "Message is too short.");
    } else {
        showValidity(true, message, null);
        valid = true;
    }
    return valid;
}

function showValidity(type, input, message) {
    const formField = input.parentElement;
    const smallMessage = formField.querySelector('small');
    if (type) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        smallMessage.textContent = "";
    } else {
        smallMessage.textContent = message;
        input.classList.remove('valid');
        input.classList.add('invalid');
    }

};