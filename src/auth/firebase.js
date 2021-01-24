import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdnUfZEvrSnAj4fNsI-lsn7j62lnc-j9c",
  authDomain: "beats-school.firebaseapp.com",
  projectId: "beats-school",
  storageBucket: "beats-school.appspot.com",
  messagingSenderId: "454782603538",
  appId: "1:454782603538:web:89e8d30956dd8fefb123cb",
  measurementId: "G-KSBR8J00Z5",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

//firebase.analytics();
