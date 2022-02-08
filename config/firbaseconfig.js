// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByLh44gjtDLeAfUCRtkCFv1FPyU0xihN0",
  authDomain: "deliverypot-e8d1f.firebaseapp.com",
  projectId: "deliverypot-e8d1f",
  storageBucket: "deliverypot-e8d1f.appspot.com",
  messagingSenderId: "730838269015",
  appId: "1:730838269015:web:a7a9b60a8602740a1cb712",
  measurementId: "G-VFRMBJJZ07"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = { firebaseConfig, firebaseApp, db };