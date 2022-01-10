import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqojKeC8g4N-VjY8C9-AC4s4WpgiqAJ5w",
    authDomain: "voting-app-c7f6c.firebaseapp.com",
    projectId: "voting-app-c7f6c",
    storageBucket: "voting-app-c7f6c.appspot.com",
    messagingSenderId: "193986236353",
    appId: "1:193986236353:web:c74a112bfe394cd340e940"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();
