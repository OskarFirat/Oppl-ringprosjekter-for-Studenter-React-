import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB1_G5Gtn8xN7BSHTpaWYCx9BB91KQ0KMY",
    authDomain: "projectidnn.firebaseapp.com",
    databaseURL: "https://projectidnn.firebaseio.com",
    projectId: "projectidnn",
    storageBucket: "projectidnn.appspot.com",
    messagingSenderId: "563769062168",
    appId: "1:563769062168:web:043341a0929c4d93"
  };
const fire = firebase.initializeApp(config);
export default fire;