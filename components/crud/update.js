import { doc, updateDoc } from "firebase/firestore";
import { database } from "./database";

export async function UpdateMundiLead(leadId, newName, newUsername, newPhone, newBirth) {
    const docRef = doc(database, 'mundi-leads', leadId);

    try {
        await updateDoc(docRef, {
            name: newName,
            userName: newUsername,
            phone: newPhone,
            birth: newBirth,
        })
        console.log('done');
    } catch(error) {
        console.log(error);
    }
}
