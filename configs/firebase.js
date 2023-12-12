import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6q-HRDdLThs-wd5b2hSuRScXcJG_Cn20",
    authDomain: "nastar-4a3b0.firebaseapp.com",
    projectId: "nastar-4a3b0",
    storageBucket: "nastar-4a3b0.appspot.com",
    messagingSenderId: "978414754309",
    appId: "1:978414754309:web:e77ccd29f57cd3fce21a6c",
    measurementId: "G-RBRDX7SSST"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);




export { app, db, storage, auth };