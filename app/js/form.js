const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit-btn');
const firstName = document.getElementById('first-name');
const firstNameErr = document.getElementById('first-name-err');
const firstErrIcon = document.getElementById('first-error-icon');
const lastName = document.getElementById('last-name');
const lastNameErr = document.getElementById('last-name-err');
const lastErrIcon = document.getElementById('last-error-icon');
const email = document.getElementById('email');
const emailErr = document.getElementById('email-err');
const emailErrIcon = document.getElementById('mail-error-icon');
const password = document.getElementById('password');
const passwordErr = document.getElementById('password-err');
const passwordErrIcon = document.getElementById('password-error-icon');

submitBtn.addEventListener('click', handleSubmit);
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function handleSubmit() {
    checkInput();
    checkEmail();
}

function checkInput() {
    if (firstName.value.length == 0) {
        firstNameErr.textContent = "First Name cannot be empty";
        firstName.classList.add('input--invalid');
        firstErrIcon.classList.add('error-icon--shown');
    } else {
        firstNameErr.textContent = "";
        firstName.classList.remove('input--invalid');
        firstErrIcon.classList.remove('error-icon--shown');
    };
    if (lastName.value.length == 0) {
        lastNameErr.textContent = "Last Name cannot be empty";
        lastName.classList.add('input--invalid');
        lastErrIcon.classList.add('error-icon--shown');
    } else {
        lastNameErr.textContent = "";
        lastName.classList.remove('input--invalid');
        lastErrIcon.classList.remove('error-icon--shown');
    };
    if (password.value.length == 0) {
        passwordErr.textContent = "Password cannot be empty";
        password.classList.add('input--invalid');
        passwordErrIcon.classList.add('error-icon--shown');
    } else {
        passwordErr.textContent = "";
        password.classList.remove('input--invalid');
        passwordErrIcon.classList.remove('error-icon--shown');
    };
}

function checkEmail() {
    if (email.validity.typeMismatch) {
        emailErr.textContent = "Please provide a valid email address";
        email.classList.add('input--invalid')
        emailErrIcon.classList.add('error-icon--shown')
    } else if (email.value.length == 0) {
        emailErr.textContent = "Email cannot be empty";
        email.classList.add('input--invalid');
        emailErrIcon.classList.add('error-icon--shown');
    } else {
        emailErr.textContent = "";
        email.classList.remove('input--invalid')
        emailErrIcon.classList.remove('error-icon--shown')
    }
}