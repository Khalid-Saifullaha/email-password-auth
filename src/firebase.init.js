// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DO NOT SHARE CONFIG IN PUBLIC
const firebaseConfig = {
  apiKey: "AIzaSyArciVmMtr0ERse68LmtW51xhVbuy7eR7o",
  authDomain: "mail-password-auth-b733f.firebaseapp.com",
  projectId: "mail-password-auth-b733f",
  storageBucket: "mail-password-auth-b733f.firebasestorage.app",
  messagingSenderId: "853963334185",
  appId: "1:853963334185:web:ed4d859576bc447d4c7238",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
