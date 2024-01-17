import { NextResponse } from "next/server";

export async function middleware(request) {
    const origin = request.headers.get('origin');
    console.log(origin);

    const response = NextResponse.next();
    response.headers.set('Acess-Control-Allow-Origin', '*');
    response.headers.set('Acess-Control-Allow-Methods', 'GET, POST, PUST, DELETE, OPTIONS');
    response.headers.set('Acess-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Acess-Control-Max-Age', '86400');

    console.log('Middleware');
    console.log(request.method);
    console.log(request.url);

    return response;
    
}

export const config = {
    matcher: '/api/:path*'
};