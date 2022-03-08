import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { firebaseAPIConfig } from "../env.js";

// Initialize Firebase
const app = initializeApp(firebaseAPIConfig);

const sign_out_button = document.getElementById('signout_button');

sign_out_button.onclick = function () { sign_out(); };


function sign_out() {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "http://127.0.0.1:5500/MyBranch/index.html";
    }).catch((error) => {
        console.log(error);
    });
}