import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "./database";

export async function CreateMundiLead(name, userName, phone, birth) {
    try {
        const docRef = collection(database, 'mundi-leads');
        await setDoc(doc(docRef), {
            name : name,
                userName: userName,
                phone: phone,
                birth: birth,
        })
    } catch(error) {
        console.log('errou, hein!')
    }
};
