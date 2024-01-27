import { doc, deleteDoc } from "firebase/firestore";
import { database } from "./database";

async function DeleteLeads(mundiLeadsId){
    try {
        for(const id of mundiLeadsId){
            const docRef = doc(database, 'mundi-leads', id);
            await deleteDoc(docRef).then(() => {
                console.log('correctly deleted')
            });
        }
    } catch(error) {
        console.log(error)
    }
}

export default DeleteLeads;