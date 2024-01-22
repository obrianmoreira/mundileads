import { NextResponse } from "next/server";

export function middleware(request) {
    const origin = request.headers.get('origin');
    console.log(origin);
    console.log('Middleware');
    console.log(request.method);
    console.log(request.ulr);

    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONs');
    response.headers.set('Access-Control-Allow-Headers', 'Content-type');
    return response;
}

export const config = {
    matcher: '/api/:path*'
}