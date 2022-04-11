import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCMpO71MTsXWmd3ehDA0ZBqpIxlPheB7DY",
    authDomain: "netflix-36b65.firebaseapp.com",
    projectId: "netflix-36b65",
    storageBucket: "netflix-36b65.appspot.com",
    messagingSenderId: "351340824083",
    appId: "1:351340824083:web:c46741d2036d94ee24e1e6",
    measurementId: "G-CYS7PJ1EL0"
};

//initilize application

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;