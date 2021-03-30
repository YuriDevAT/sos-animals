import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyBYQHQlyCJZSYtRs9hZCyf1Cc7EtDJtehw",
    authDomain: "sos-animals-4815e.firebaseapp.com",
    projectId: "sos-animals-4815e",
    storageBucket: "sos-animals-4815e.appspot.com",
    messagingSenderId: "120596175493",
    appId: "1:120596175493:web:9442cfa602dac007b967ec",
    measurementId: "G-XTTCG5KER6"
  };

firebase.initializeApp(firebaseConfig);

const { arrayUnion } = firebase.firestore.FieldValue;

export { arrayUnion };