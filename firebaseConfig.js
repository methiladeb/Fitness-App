// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33FH69NrKZ-gxNUkciAWp2ipUaoSM3oo",
  authDomain: "fitness-app-1aa50.firebaseapp.com",
  projectId: "fitness-app-1aa50",
  storageBucket: "fitness-app-1aa50.appspot.com",
  messagingSenderId: "705289588491",
  appId: "1:705289588491:web:3552a6f0dfb66ba15c1c0e",
  measurementId: "G-MR6L9K3F8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances for Firebase services
const auth = getAuth(app);

export { app, auth };