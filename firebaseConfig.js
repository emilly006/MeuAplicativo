// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCMgOhQ3_7mxcCFkmo4ElIb5jyWu2kkRr8",
  authDomain: "meuaplicativo-5b635.firebaseapp.com",
  projectId: "meuaplicativo-5b635",
  storageBucket: "meuaplicativo-5b635.firebasestorage.app",
  messagingSenderId: "850475519255",
  appId: "1:850475519255:web:9bb0616c2dba96ccce3b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
