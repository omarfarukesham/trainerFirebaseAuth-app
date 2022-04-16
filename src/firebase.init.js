// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7EwYOQg-is6BPlBAju49g5UQ7zfldxfw",
  authDomain: "corporate-trainer-app.firebaseapp.com",
  projectId: "corporate-trainer-app",
  storageBucket: "corporate-trainer-app.appspot.com",
  messagingSenderId: "1013919561",
  appId: "1:1013919561:web:33be73a1d01c5d3471f498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;