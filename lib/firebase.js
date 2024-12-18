// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MSfcTn022YhCkszH6zRnjXG9Kqeuy0k",
  authDomain: "diginfo.firebaseapp.com",
  projectId: "diginfo",
  storageBucket: "diginfo.firebasestorage.app",
  messagingSenderId: "886289701437",
  appId: "1:886289701437:web:f4765a6047a28c07366854",
  measurementId: "G-7397KWBB1K"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };