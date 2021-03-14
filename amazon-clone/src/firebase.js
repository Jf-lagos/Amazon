import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC4TSfHUJ3PAytaDhcUHkiDtSiMz5aYJzo",
    authDomain: "challenge-4e65b.firebaseapp.com",
    projectId: "challenge-4e65b",
    storageBucket: "challenge-4e65b.appspot.com",
    messagingSenderId: "741793473402",
    appId: "1:741793473402:web:350e82415f67c68fb5acc3",
    measurementId: "G-BRRRE5S1GH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};