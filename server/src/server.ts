import Fastify from 'fastify';
import cors from '@fastify/cors'
import { appRoutes } from './routes';
export const app = Fastify();

app.register(cors)
app.register(appRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333/');
  });
