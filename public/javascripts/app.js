
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcCaYDCngllKbuVIdUrXoCGkE_M2sGpbc",
  authDomain: "softsecsyn.firebaseapp.com",
  databaseURL: "https://softsecsyn-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "softsecsyn",
  storageBucket: "softsecsyn.appspot.com",
  messagingSenderId: "900206301582",
  appId: "1:900206301582:web:957b562071f65434fed4df",
  measurementId: "G-0JP6BY5WBY"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireapp);
