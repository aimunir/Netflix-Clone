 import firebase from './firebase'
 const firebaseConfig = {
    apiKey: "AIzaSyC5sWYu1Mb3wUSlEhTgzato9NjcFxK7H6g",
    authDomain: "netflix-clone-83880.firebaseapp.com",
    projectId: "netflix-clone-83880",
    storageBucket: "netflix-clone-83880.appspot.com",
    messagingSenderId: "44404724878",
    appId: "1:44404724878:web:10d04a0c32e35417fae5df"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;