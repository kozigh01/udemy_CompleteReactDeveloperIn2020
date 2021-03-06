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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      try {
        userRef.set({
          displayName,
          email,
          createAt: new Date(),
          ...additionalData
        })
      } catch(err) {
        console.log('error creating user', err.message);
      }
    }

    return userRef;
  }
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      title,
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  
  objectsToAdd.forEach(doc => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, doc);
  });
  
  return await batch.commit();
};


// set-up Google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;