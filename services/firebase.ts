// Import the functions you need from the SDKs you need
import {
    initializeApp,
    getApp,
    getApps,
    FirebaseApp,
    FirebaseOptions
} from 'firebase/app';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

    // apiKey: 'AIzaSyBRH1hClz84LeEsw3NR-bmOdqFR36oNs0M',
    // authDomain: 'test-mapa-1551814152980.firebaseapp.com',
    // projectId: 'test-mapa-1551814152980',
    // storageBucket: 'test-mapa-1551814152980.appspot.com',
    // messagingSenderId: '569622988245',
    // appId: '1:569622988245:web:f8c6ca400145b818bce95c'
};

let app: FirebaseApp;

// Initialize Firebase

// Since the app is cache and we are live reloading when coding we need to get the instance if it was previously
// initialized, that why we need this piece of code  
if (getApps().length) {
    app = getApp();
} else {
    app = initializeApp(firebaseConfig);
}

export default app;