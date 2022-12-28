import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyCVY1tmDV1gTkMFhw9WDE0yFe4ZSSV57wo",
  authDomain: "sistema-c1706.firebaseapp.com",
  projectId: "sistema-c1706",
  storageBucket: "sistema-c1706.appspot.com",
  messagingSenderId: "382057002178",
  appId: "1:382057002178:web:f95ccc7900cc498fd0775b",
  measurementId: "G-SH7JVGGRBR"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;