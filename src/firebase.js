import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBf8uCzQBRVCkHnycGmJ8HzcKJTbPXwxcM",
    authDomain: "linkedin-clone-48d97.firebaseapp.com",
    projectId: "linkedin-clone-48d97",
    storageBucket: "linkedin-clone-48d97.appspot.com",
    messagingSenderId: "762702803381",
    appId: "1:762702803381:web:71c355e6c78ea0bc9ca9fc",
    measurementId: "G-2MB9PX3WDC"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };