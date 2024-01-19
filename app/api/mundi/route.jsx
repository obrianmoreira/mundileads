import { CreateMundiLead } from "@/components/crud/create";
import { ReadMundiLead } from "@/components/crud/read";
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    const {leads} = data;
    const name = leads.name;
    const userName = leads.userName;
    const phone = leads.phone;
    const birth = leads.birth;
    CreateMundiLead(name, userName, phone, birth);
    return NextResponse.json('POST DEU CERTO, CARALHO!')
}

export async function GET(request) {
  const mundiLead = await ReadMundiLead();    
  return NextResponse.json(mundiLead);
}
