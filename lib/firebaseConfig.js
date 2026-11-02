// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEoisSLu5h5yxMe7vMs3epMXSfxE68L8M",
  authDomain: "web-185800.firebaseapp.com",
  projectId: "web-185800",
  storageBucket: "web-185800.firebasestorage.app",
  messagingSenderId: "670409876842",
  appId: "1:670409876842:web:8ed7f04eca17d36f89b113",
  measurementId: "G-NGRDXKBMGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
