import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { firebaseAPIConfig } from "./env.js";

// Initialize Firebase
const app = initializeApp(firebaseAPIConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "http://127.0.0.1:5500/MyBranch/app.html";
    } else {
        console.log("test");
    }
});