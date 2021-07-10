import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDW9SD_oRHpe2G10NxZKWRmNaMFzF3qWog",
    authDomain: "ecommerce-aruguete.firebaseapp.com",
    projectId: "ecommerce-aruguete",
    storageBucket: "ecommerce-aruguete.appspot.com",
    messagingSenderId: "856812968747",
    appId: "1:856812968747:web:d23ffed921cd5b0272036e"
};


  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const dataBase = fb.firestore()