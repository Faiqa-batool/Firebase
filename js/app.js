
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";

const auth = getAuth();
const signup = () => {
    let email_login = document.getElementById("email-login");
    let password_login = document.getElementById("password-login");

    createUserWithEmailAndPassword(auth, email_login.value, password_login.value)
    .then((resolve)=>{
        alert("Successfully signed up!")

    }).catch((reject)=>{
        alert("Signup rejected!")
    })
}

let signup_btn = document.getElementById("signup-btn");
signup_btn.addEventListener("click", signup);
const login = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((resolve)=>{
        alert("Successfully Loged In!")

    }).catch((reject)=>{
        alert("Login rejected!")
    })
}
let login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", login);