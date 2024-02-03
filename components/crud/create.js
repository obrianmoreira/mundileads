import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "./database";

export async function CreateMundiLead(name, userName, phone, birth, instaTracker, faceTracker) {
    try {
        const docRef = collection(database, 'mundi-leads');
        await setDoc(doc(docRef), {
            name : name,
            userName: userName,
            phone: phone,
            birth: birth,
            instaTracker: instaTracker,
            faceTracker: faceTracker,
        })
    } catch(error) {
        console.log('errou, hein!')
    }
};
