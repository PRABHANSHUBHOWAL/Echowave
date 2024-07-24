// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmi2rhJLjZMSuWWfUPLlYPIWGIpNNUw2U",
  authDomain: "echowave-aa85f.firebaseapp.com",
  projectId: "echowave-aa85f",
  storageBucket: "echowave-aa85f.appspot.com",
  messagingSenderId: "15671275872",
  appId: "1:15671275872:web:220afeb05a86812a07ae05",
  measurementId: "G-42WWTZJ33P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;