// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgcOAq_sSj3_tp5dL0LFeH7C6LNlhPzvU',
  authDomain: 'react-slack-clone-e4382.firebaseapp.com',
  projectId: 'react-slack-clone-e4382',
  storageBucket: 'react-slack-clone-e4382.appspot.com',
  messagingSenderId: '654556211758',
  appId: '1:654556211758:web:8d9712c8b9cb336a20cdbf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider };
