// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDFFERAlEnfkj8m4HronBd6D_BfJr3F7zo",
    authDomain: "netflix-clone-a0d25.firebaseapp.com",
    projectId: "netflix-clone-a0d25",
    storageBucket: "netflix-clone-a0d25.appspot.com",
    messagingSenderId: "316195072947",
    appId: "1:316195072947:web:1b1054061c06d301fcf9c6",
    measurementId: "G-CCY597BPHS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;