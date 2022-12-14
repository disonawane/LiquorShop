import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDsr-eSLN96nUbKeUX3F33jFr5-TTvecRY",
    authDomain: "liquorshop-2a15d.firebaseapp.com",
    projectId: "liquorshop-2a15d",
    storageBucket: "liquorshop-2a15d.appspot.com",
    messagingSenderId: "638894637387",
    appId: "1:638894637387:web:0536da98bb4962a64ee8ce",
    measurementId: "G-3WN830KJ0Y"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};
