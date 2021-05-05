import firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA242fnTQ3jitjK-id4AdjcW5R1jdI2u90",
    authDomain: "barter-app-8e883.firebaseapp.com",
    projectId: "barter-app-8e883",
    storageBucket: "barter-app-8e883.appspot.com",
    messagingSenderId: "105524836723",
    appId: "1:105524836723:web:f4a3941dfc2cb59fbe6d06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();