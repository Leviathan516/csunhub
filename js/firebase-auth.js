
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClTeS_q66bYQkVEOcSoc-TY3VX4QRKeho",
  authDomain: "csunhub.firebaseapp.com",
  projectId: "csunhub",
  storageBucket: "csunhub.firebasestorage.app",
  messagingSenderId: "310029268686",
  appId: "1:310029268686:web:f2ce71516f1f82e166829f",
  measurementId: "G-ZEM4D9Y5XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const messageEl = document.getElementById("message");
const btn = document.getElementById("signupButton");

btn.addEventListener("click", async () => {
  messageEl.textContent = "";

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const major = document.getElementById("major").value.trim();
  const catalogYear = document.getElementById("catalogYear").value.trim();

  if (!username || !email || !password) {
    messageEl.textContent = "Please fill in username, email, and password.";
    return;
  }

  if (password !== confirmPassword) {
    messageEl.textContent = "Passwords do not match.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed up 
    const user = userCredential.user;
    
    // You can now store the additional user information (username, major, catalogYear) in your database
    // For example, using Firebase Firestore. This part is not included here.
    
    console.log("Sign-up success:", user);

    messageEl.textContent = "Account created! Redirecting to login...";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Signup error:", errorCode, errorMessage);
    messageEl.textContent = errorMessage;
  }
});
