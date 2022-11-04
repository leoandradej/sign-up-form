const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'This field cannot be blank');
    } else {
        setSuccess(firstName);
    }
    if(lastNameValue === '') {
        setError(lastName, 'This field cannot be blank');
    } else {
        setSuccess(lastName);
    }
    if(emailValue === '') {
        setError(email, 'This field cannot be blank');
    } else if(!isEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }
    if(phoneValue === '') {
        setError(phone, 'This field cannot be blank');
    } else if(!isPhone(phoneValue)) {
        setError(phone, 'Phone number is not valid');
    } else {
        setSuccess(phone);
    }
    if(passwordValue === '') {
        setError(password, 'This field cannot be blank');
    } else if(passwordValue !== confirmPasswordValue) {
        setError(password, 'Passwords do not match');
    } else {
        setSuccess(password);
    }
    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'This field cannot be blank');
    } else if(passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(input, message) {
    const formField = input.parentElement;
    const small = formField.querySelector('small');
    small.innerText = message;
    formField.className = 'form-field error';
}

function setSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
}