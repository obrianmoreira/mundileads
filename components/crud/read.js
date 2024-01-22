import { collection, getDocs } from "firebase/firestore";
import { database } from "./database";

export async function ReadMundiLead() {

    try {
        const dbInstance = collection(database, 'MundiLead');
        const queryData = await getDocs(dbInstance);
        const queryArray = [];
        queryData.forEach((doc) => {
            queryArray.push({id: doc.id, ...doc.data()});
        });
        return queryArray;
    } catch (error) {
        console.log(error)
    }

};