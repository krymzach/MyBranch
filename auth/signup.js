import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { firebaseAPIConfig } from "../env.js";

// Initialize Firebase
const app = initializeApp(firebaseAPIConfig);

const sign_up_button = document.getElementById('signup_button');

sign_up_button.onclick = function () { sign_up(document.getElementById('email_input').value, document.getElementById('pass_input').value); };


function sign_up(email, pass) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "http://127.0.0.1:5500/MyBranch/app.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}