import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUwYOAQkqlLIhvOL-cqmBrnUb5gnNKT50",
    authDomain: "mundileads.firebaseapp.com",
    databaseURL: "https://mundileads-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mundileads",
    storageBucket: "mundileads.appspot.com",
    messagingSenderId: "658283247532",
    appId: "1:658283247532:web:6fe9ab9f8d56c01d396c09",
    measurementId: "G-0CKYKHCTP9"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export {database};
