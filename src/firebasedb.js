import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sWYu1Mb3wUSlEhTgzato9NjcFxK7H6g",
  authDomain: "netflix-clone-83880.firebaseapp.com",
  projectId: "netflix-clone-83880",
  storageBucket: "netflix-clone-83880.appspot.com",
  messagingSenderId: "44404724878",
  appId: "1:44404724878:web:10d04a0c32e35417fae5df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
