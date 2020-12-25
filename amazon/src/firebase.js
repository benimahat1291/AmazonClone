import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCbCit9p3zysVLQQvU16u6w_6yd1n0fNlw",
    authDomain: "clone-bc3dc.firebaseapp.com",
    projectId: "clone-bc3dc",
    storageBucket: "clone-bc3dc.appspot.com",
    messagingSenderId: "395897102936",
    appId: "1:395897102936:web:73547d2884a9cca5af202d",
    measurementId: "G-3K05VYBQJ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};