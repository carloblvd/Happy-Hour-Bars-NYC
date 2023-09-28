// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApSPdLssNWaAJAxVdj2YvczNJ2GBSSxYI",
  authDomain: "happy-hour-bars.firebaseapp.com",
  projectId: "happy-hour-bars",
  storageBucket: "happy-hour-bars.appspot.com",
  messagingSenderId: "29153801932",
  appId: "1:29153801932:web:413f16c8f3cac1d9a6b469",
  measurementId: "G-F0X117G7CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
