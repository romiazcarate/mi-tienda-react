// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDphTNFPfOUXLEaoqxuQ2IyopIzfgE1id8",
  authDomain: "proyecto-react-d798e.firebaseapp.com",
  projectId: "proyecto-react-d798e",
  storageBucket: "proyecto-react-d798e.firebasestorage.app",
  messagingSenderId: "265609221143",
  appId: "1:265609221143:web:5348601af149a59f2d7852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)