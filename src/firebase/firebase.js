import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxZTCcgZt3I2BZadi1HTuMLc-3lubXSU",
  authDomain: "seantodo-59011.firebaseapp.com",
  projectId: "seantodo-59011",
  storageBucket: "seantodo-59011.firebasestorage.app",
  messagingSenderId: "239233315324",
  appId: "1:239233315324:web:154448fa7a75aef68f8279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);