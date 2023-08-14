const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const submitButton = document.getElementById('submitButton');
const errorElement = document.getElementById('error');

let messages = [];

form.addEventListener('submit', (e) => {
    console.log(`password: ${password.value}`);
    console.log(`confirmpassword: ${confirmPassword.value}`);

    //e.preventDefault();

    if(password.value != confirmPassword.value) {
        errorElement.innerText = "*Passwords do not match";
        e.preventDefault();
    }
})