// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZtyVKkGBETvCwQi7ZQdDHsqay7RIn0hI",
  authDomain: "codentraa-b3629.firebaseapp.com",
  projectId: "codentraa-b3629",
  storageBucket: "codentraa-b3629.firebasestorage.app",
  messagingSenderId: "776280046322",
  appId: "1:776280046322:web:a1bcb8dfd18f8217832e6b",
  measurementId: "G-LSYXHZ0BNS"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);