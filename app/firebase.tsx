// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGG10f4eT8Lyc9EmP5pIxnsQOhPTSky64",
  authDomain: "kapampangan-translator.firebaseapp.com",
  projectId: "kapampangan-translator",
  storageBucket: "kapampangan-translator.appspot.com",
  messagingSenderId: "395233341927",
  appId: "1:395233341927:web:9c57442e1e507921c44d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);
