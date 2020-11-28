import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAfB80waXGXs3S_Jviyz1SHqWc8wLloD2s",
  authDomain: "crwn-db-2691f.firebaseapp.com",
  databaseURL: "https://crwn-db-2691f.firebaseio.com",
  projectId: "crwn-db-2691f",
  storageBucket: "crwn-db-2691f.appspot.com",
  messagingSenderId: "33022107877",
  appId: "1:33022107877:web:a9c2d628fa4c8cac75f40c",
  measurementId: "G-5MW6MHWEP7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
