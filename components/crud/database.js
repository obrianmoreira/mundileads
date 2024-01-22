import {FirebaseOptions, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
<<<<<<< HEAD:components/crud/database.js
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
=======
    apiKey: "AIzaSyDUwYOAQkqlLIhvOL-cqmBrnUb5gnNKT50",
      authDomain: "mundileads.firebaseapp.com",
      databaseURL: "https://mundileads-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mundileads",
      storageBucket: "mundileads.appspot.com",
      messagingSenderId: "658283247532",
      appId: "1:658283247532:web:6fe9ab9f8d56c01d396c09",
      measurementId: "G-0CKYKHCTP9"
>>>>>>> 061ae7c1316c0a18a942a87d97fafaf811ded467:components/crud/database.jsx
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export {database};
