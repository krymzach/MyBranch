// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { firebaseAPIConfig } from "./env.js";

// Initialize Firebase
const app = initializeApp(firebaseAPIConfig);

const app_page = document.getElementById('app_page');
const button1 = document.getElementById('1vu');

button1.onclick = function () { createNode('f', '0, 0', 1, 'Patricia Krymgold'); };

function createNode(gender, prevNodePos, prevId, name) {
    app_page.innerHTML += "<div class='node_container' style='left: 50%; top: calc(50% - 10vw); transform: translate(-50%, -50%);' id=" + String(prevId + 1) + "> <div class='vertical_line' id=" + String(prevId + 1) + "vu'> <div class='add_icon'> <p class='add'>+</p> </div> </div> <div class='node " + gender + "'> <!--<img src='' alt=''>--> <p class='no_image'>?</p> </div> <p class='node_name'>" + name + "</p> </div>";
}