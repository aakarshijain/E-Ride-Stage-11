import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAOl5wxYZ40U8-bQlJYjJXZwO2F23fwvLU",
  authDomain: "e-ride-13.firebaseapp.com",
  projectId: "e-ride-13",
  storageBucket: "e-ride-13.appspot.com",
  messagingSenderId: "1024400013740",
  appId: "1:1024400013740:web:443151f3516a7f330b2209"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
