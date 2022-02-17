// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBClIuwWUosJwO_oaoKWP9lHweUB4EFSG8",
  authDomain: "tiendacurso-2d1fb.firebaseapp.com",
  projectId: "tiendacurso-2d1fb",
  storageBucket: "tiendacurso-2d1fb.appspot.com",
  messagingSenderId: "534757920500",
  appId: "1:534757920500:web:d3eb3e29d0194fce56d8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
return app
}