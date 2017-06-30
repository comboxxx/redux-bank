import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDh2erMPWN7i-Kp7qlz0zaPHrSOKqbof74",
    authDomain: "kitsakornfirebase.firebaseapp.com",
    databaseURL: "https://kitsakornfirebase.firebaseio.com",
    projectId: "kitsakornfirebase",
    storageBucket: "kitsakornfirebase.appspot.com",
    messagingSenderId: "232864282026"
  };
  
  firebase.initializeApp(config);

  export const rootRef =  firebase.database().ref();
  export const  userRef =  rootRef.child('bankUser');
    export const  transactionHistoryRef =  rootRef.child('transactionHistory');