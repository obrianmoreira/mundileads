import { collection, doc, setDoc } from "firebase/firestore";
import { database } from "./database";

export async function CreateMundiLead(name, userName, phone, birth) {
    try {
        const docRef = collection(database, 'mundi-leads');
        await setDoc(doc(docRef), {
            name : name,
<<<<<<< HEAD
            userName: userName,
            phone: phone,
            birth: birth,
=======
                userName: userName,
                phone: phone,
                birth: birth,
>>>>>>> 4e29e57e66dc661fa4cc778eb1076a05841276a8
        })
    } catch(error) {
        console.log('errou, hein!')
    }
};
