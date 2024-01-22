import { CreateMundiLead } from "@/components/crud/create";
import { ReadMundiLead } from "@/components/crud/read";


export async function POST(request) {
    try {
        const data = await request.json();
        const {leads} = data;
        const name = leads.name;
        const userName = leads.userName;
        const phone = leads.phone;
        const birth = leads.birth;
        CreateMundiLead(name, userName, phone, birth);
        return Response.json('POST DEU CERTO, CARALHO');
    } catch (error) {
        return Response.json({error: 'ALGO DEU ERRADO'});
    }
}

export async function GET(){
    try {
        const mundiLead = await ReadMundiLead();
        return Response.json(mundiLead);
    } catch(error){
        return Response.json({error: "SOMETHING WENT WRONG"});
    }
}