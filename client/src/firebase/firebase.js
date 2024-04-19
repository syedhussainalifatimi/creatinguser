import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARf2uk9sRFOnU9_udEkR5yx9EkXyco3Bo",
  authDomain: "login-withdb.firebaseapp.com",
  projectId: "login-withdb",
  storageBucket: "login-withdb.appspot.com",
  messagingSenderId: "184836660494",
  appId: "1:184836660494:web:8149b5a502b5c1ec750b5f",
  measurementId: "G-9ELPWLZ2LD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// Set up Google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Export the Google sign-in function
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;