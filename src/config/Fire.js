import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCclUJMXXT1siYhfj-9_PtSnvZ1mkqNxLM",
  authDomain: "hotel-c0f35.firebaseapp.com",
  projectId: "hotel-c0f35",
  storageBucket: "hotel-c0f35.appspot.com",
  messagingSenderId: "992693186820",
  appId: "1:992693186820:web:d02d6fe3acf6dec2ab6051",
  measurementId: "G-6WMTEJZBW3",
};

const fire = firebase.initializeApp(config);
export default fire;
