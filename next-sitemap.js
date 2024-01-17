import { registerRoute } from 'next/server';
import { middleware } from './middleware';

registerRoute({
  path: '/api/:path*',
  handler: middleware,
});