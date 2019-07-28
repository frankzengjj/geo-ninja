import firebase from 'firebase';
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDP4bt3HliQy8uqITPLIZz6JQCW3cwNEho",
    authDomain: "geo-postwall.firebaseapp.com",
    databaseURL: "https://geo-postwall.firebaseio.com",
    projectId: "geo-postwall",
    storageBucket: "",
    messagingSenderId: "1049754894925",
    appId: "1:1049754894925:web:e7e5f8211a74ee65"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore();