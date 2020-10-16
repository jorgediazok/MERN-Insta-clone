import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBV4h_APLvwCRTeKrT56QfR5Yd18fBL-us",
  authDomain: "instagram-clone-15aee.firebaseapp.com",
  databaseURL: "https://instagram-clone-15aee.firebaseio.com",
  projectId: "instagram-clone-15aee",
  storageBucket: "instagram-clone-15aee.appspot.com",
  messagingSenderId: "513104316817",
  appId: "1:513104316817:web:85b5c260dfadc77a4d7230"
});

const db =  firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};