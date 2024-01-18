import { NextResponse } from "next/server";
import { NextRequest } from "Next/server";

export async function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');
    console.log(origin);

    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUST, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');

    console.log('Middleware');
    console.log(request.method);
    console.log(request.url);

    return response;
    
}

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
    externalResolver: true, // Enable custom server framework (if applicable)
    // Specify the middleware for your route
    middleware: [middleware],
  },
};
