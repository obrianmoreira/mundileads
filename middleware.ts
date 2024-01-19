import { NextResponse } from "next/server";
import { NextRequest } from "Next/server";

export async function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    console.log(origin);

    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');

    console.log('Middleware');
    console.log(request.method);
    console.log(request.url);

    return response;
    
}

export const config = {
    matcher: '/api/:path*'
};
