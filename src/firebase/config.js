import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4SDZrXd9ib1IhYtQNT9LDoMevU95YcAY",
  authDomain: "react-bulletin-board-66d93.firebaseapp.com",
  projectId: "react-bulletin-board-66d93",
  storageBucket: "react-bulletin-board-66d93.appspot.com",
  messagingSenderId: "439835835898",
  appId: "1:439835835898:web:2a112c434345485be5f843"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStore = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStore, projectFirestore, timestamp};