 import firebase from 'firebase/compat/app';
 import 'firebase/compat/storage';
 import 'firebase/compat/firestore';
 
 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDdYXLpExZEBFmMuCUm_AIb3Gg4yNMrNZg",
   authDomain: "firegram-b5113.firebaseapp.com",
   projectId: "firegram-b5113",
   storageBucket: "firegram-b5113.appspot.com",
   messagingSenderId: "293938783692",
   appId: "1:293938783692:web:745d8ff4d0e6729902a969"
 };

 // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();

 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage, projectFirestore, timestamp };