// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDj_jeE_FqZSYy6WMij8NhL1o_pyIwwYKs",
//   authDomain: "fir-project-1-1d090.firebaseapp.com",
//   projectId: "fir-project-1-1d090",
//   storageBucket: "fir-project-1-1d090.appspot.com",
//   messagingSenderId: "34638785969",
//   appId: "1:34638785969:web:14db00390e117a12e1e190",
//   measurementId: "G-7FGBZRZBQR"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDj_jeE_FqZSYy6WMij8NhL1o_pyIwwYKs",
    authDomain: "fir-project-1-1d090.firebaseapp.com",
    projectId: "fir-project-1-1d090",
    storageBucket: "fir-project-1-1d090.appspot.com",
    messagingSenderId: "34638785969",
    appId: "1:34638785969:web:14db00390e117a12e1e190",
    measurementId: "G-7FGBZRZBQR"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);