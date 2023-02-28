// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO2VZP343Ax8D0Mr-UQbKl26TfT4RXzUA",
  authDomain: "admin-dashboard-5348f.firebaseapp.com",
  projectId: "admin-dashboard-5348f",
  storageBucket: "admin-dashboard-5348f.appspot.com",
  messagingSenderId: "1032004699785",
  appId: "1:1032004699785:web:3212bdad9b150fe6856858",
  measurementId: "G-MGZE7TS1GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);