import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcFDfD9_Ii6WMmvCFG_IMzEeS9yNkIoRo",
  authDomain: "professionalchat-65cfc.firebaseapp.com",
  databaseURL: "https://professionalchat-65cfc-default-rtdb.firebaseio.com",
  projectId: "professionalchat-65cfc",
  storageBucket: "professionalchat-65cfc.appspot.com",
  messagingSenderId: "74520676936",
  appId: "1:74520676936:web:3713d6c6bc01da517d267d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;