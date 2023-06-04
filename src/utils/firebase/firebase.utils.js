import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2focfcaEPZQDZqkEkhR1oKg0hcJzVnxI",
    authDomain: "crown-database-74ec0.firebaseapp.com",
    projectId: "crown-database-74ec0",
    storageBucket: "crown-database-74ec0.appspot.com",
    messagingSenderId: "844335526127",
    appId: "1:844335526127:web:265672bde556fdae90eb1a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth() ;
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


