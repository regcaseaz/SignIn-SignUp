// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtJFa8xO0J1znjsSmdAvQQZAyA51GV60",
  authDomain: "auth-fb50f.firebaseapp.com",
  projectId: "auth-fb50f",
  storageBucket: "auth-fb50f.appspot.com",
  messagingSenderId: "421041435735",
  appId: "1:421041435735:web:655a9fe3c9073e457a5f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add debugging log to confirm script is running
console.log('Firebase auth script loaded');

function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Sign up function called with:', email, password); // Debugging log

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('Account successfully created:', user);
            alert('Account Successfully Created!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign up:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
}

function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Sign in function called with:', email, password); // Debugging log

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Logged in successfully:', user);
            alert('Logging in...');
            window.location.href = "home.html"; // Redirect to home.html upon successful sign-in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign in:', errorCode, errorMessage);
            alert(`Error: ${errorMessage}`);
        });
}

// Expose functions to the global scope
window.signUp = signUp;
window.signIn = signIn;
