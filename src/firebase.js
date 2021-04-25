import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDIimCLnuyCknXolqw_Yd3oKECHwkHmNDs",
  authDomain: "reautest.firebaseapp.com",
  projectId: "reautest",
  storageBucket: "reautest.appspot.com",
  messagingSenderId: "689381515002",
  appId: "1:689381515002:web:86e3851ca32042e1e0b343",
  measurementId: "G-6D8BK8LRKF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebaseConfig.auth();

export default auth;
