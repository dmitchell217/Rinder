import firebase from "firebase";
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAg_XH-I_2JjiR_RATr_h0sm8DkTLd143s",
    authDomain: "tinder-clone-20804.firebaseapp.com",
    databaseURL: "https://tinder-clone-20804.firebaseio.com",
    projectId: "tinder-clone-20804",
    storageBucket: "tinder-clone-20804.appspot.com",
    messagingSenderId: "640773322091",
    appId: "1:640773322091:web:724a02d9826ae24cfa082e",
    measurementId: "G-CR3VGSDGXT"
  };
//   // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
const database_fb = firebaseApp.firestore();

export default database_fb;