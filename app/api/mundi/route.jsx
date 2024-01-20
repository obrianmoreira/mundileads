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
        return Response.json(JSON.stringify({message: 'POST DEU CERTO, CARALHO'}),
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return Response.json(JSON.stringify({error: 'ALGO DEU ERRADO'}),
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            status: 500,
        });
    }
}

export async function GET(){
    try {
        const mundiLead = await ReadMundiLead();
        return Response.json({message: mundiLead}, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            status: 200,
        });
    } catch(error){
        return Response.json({error: "SOMETHING WENT WRONG"}, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            status: 500,
        });
    }
}
