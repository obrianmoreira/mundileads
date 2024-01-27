import { CreateMundiLead } from "@/components/crud/create";
import DeleteLeads from "@/components/crud/delete";
import DeleteTasks from "@/components/crud/delete";
import { ReadMundiLead } from "@/components/crud/read";
import { NextResponse } from "next/server";


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
    } catch(error) {
        console.log(error);
        return Response.json({error: error}, {status: 500})
    }
}

export async function DELETE(request){
    try {
        const data = await request.json();
        const {mundiLeadsId} = data;
        DeleteLeads(mundiLeadsId);
    } catch(error) {
        console.log(error);
        return Response.json({error: error});
    }
}