import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSR7z9JoxFXzwy15c6gygPjRQvpzwIs0Q",
    authDomain: "discord-clone-f9444.firebaseapp.com",
    projectId: "discord-clone-f9444",
    storageBucket: "discord-clone-f9444.appspot.com",
    messagingSenderId: "887418576400",
    appId: "1:887418576400:web:95946b14ea1d4c60833495"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;