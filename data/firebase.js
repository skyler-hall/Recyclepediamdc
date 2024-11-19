// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6MSfcTn022YhCkszH6zRnjXG9Kqeuy0k', //firestore database API key
  authDomain: "diginfo.firebaseapp.com",
  projectId: "diginfo",
  storageBucket: "diginfo.firebasestorage.app",
  messagingSenderId: "886289701437",
  appId: "1:886289701437:web:f4765a6047a28c07366854",
  measurementId: "G-7397KWBB1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()