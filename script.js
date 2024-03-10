let signupBtn = document.getElementById("signup_btn");
let loginBtn = document.getElementById("login_btn");
let title = document.getElementById("title");
let nameFields = document.getElementById("name_fields");

// switch on signup or login Buttons
loginBtn.onclick = function(){
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
    title.innerHTML = "Log In";
    nameFields.style.display = "none";

}

signupBtn.onclick = function(){
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
    title.innerHTML = "Sign Up for Free";
    nameFields.style.display = "block";
}

const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    element.classList.add('error');
    element.classList.remove('success');

    const inputControl = element.parentElement;
    const errorMessageText = inputControl.querySelector('.errorMessage');
    errorMessageText.innerHTML = message;
}

const setSuccess = (element) => {
    element.classList.remove('error');
    element.classList.add('success');

    const inputControl = element.parentElement;
    const errorMessageText = inputControl.querySelector('.errorMessage');
    errorMessageText.innerText = "";
}

const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/g;
    return regex.test(String(email));
}

const validateInputs = () => {
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === "" || firstnameValue === undefined || firstnameValue === null){
        setError(firstName, "First name and last name are required");
    } else {
        setSuccess(firstName);
    }

    if (lastnameValue === "" || lastnameValue === undefined || lastnameValue === null){
        setError(lastName, "First name and last name are required");
    } else {
        setSuccess(lastName);
    }
    
    if (emailValue === "" || emailValue === undefined || emailValue === null){
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Please provide a valid email address");
    } else {
        setSuccess(email);
    }
    
    if (passwordValue === "" || passwordValue === undefined || passwordValue === null){
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters")
    } else {
        setSuccess(password);
    }

}



