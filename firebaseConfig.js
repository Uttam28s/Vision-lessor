import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  // Add your Firebase configuration details here
  apiKey: "AIzaSyBs61DwwpGQMYUkPHrs2MWimiKZqcXZpBI",
  authDomain: "vision-lessor.firebaseapp.com",
  projectId: "vision-lessor",
  storageBucket: "vision-lessor.appspot.com",
  messagingSenderId: "627714064136",
  appId: "1:627714064136:web:c7e255810f2411ad12f6bd",
  measurementId: "G-KF9P14DKJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;