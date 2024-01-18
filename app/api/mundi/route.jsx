import { Response } from 'next';
import { CreateMundiLead } from "@/components/crud/create";
import { ReadMundiLead } from "@/components/crud/read";

export async function POST(request) {
    const data = await request.json();
    const {leads} = data;
    const name = leads.name;
    const userName = leads.userName;
    const phone = leads.phone;
    const birth = leads.birth;
    CreateMundiLead(name, userName, phone, birth);
    return Response.json('POST DEU CERTO, CARALHO!')
}

export async function GET(request) {
  const origin = request.headers.get('origin');
  const mundiLead = await ReadMundiLead();
  const headers = {
    'Access-Control-Allow-Origin': origin || '*',
    'Content-type': 'application/json',
  };
  return new Response(JSON.stringify(mundiLead), { headers });
}
