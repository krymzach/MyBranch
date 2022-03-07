import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";


function sign_up(email, pass) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.localStorage.setItem("user", user);
        window.location.href = "http://127.0.0.1:5000/MyBranch/app.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

function sign_in(email, pass) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.localStorage.setItem("user", user);
            window.location.href = "http://127.0.0.1:5000/MyBranch/index.html";
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

function sign_out() {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "http://127.0.0.1:5000/MyBranch/index.html";
    }).catch((error) => {
        console.log(error);
    });
}