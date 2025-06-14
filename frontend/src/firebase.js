// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoCz7WQ0uvh4bZ0j_b5cCXA85kHnIRm7o",
  authDomain: "my-heartbeat-37603.firebaseapp.com",
  projectId: "my-heartbeat-37603",
  storageBucket: "my-heartbeat-37603.firebasestorage.app",
  messagingSenderId: "250717376641",
  appId: "1:250717376641:web:a4f14e03980ae2aa9bbd80",
  measurementId: "G-VRL94WW77Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);