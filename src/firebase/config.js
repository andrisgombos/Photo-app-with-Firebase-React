 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCl63zqMcojY4h7wdZJt-1AM6vPx0HW6Fk",
    authDomain: "photogram-dd2e8.firebaseapp.com",
    projectId: "photogram-dd2e8",
    storageBucket: "photogram-dd2e8.appspot.com",
    messagingSenderId: "220032081654",
    appId: "1:220032081654:web:83abd095cac32d28f616d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};