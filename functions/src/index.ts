import * as functions from 'firebase-functions';
import next from 'next';
const app = next({dev: false, conf: {distDir: '.next'}});
const handler = app.getRequestHandler();
export const server = functions.https.onRequest(async (request, response) => {
  try {
    await app.prepare();
    return handler(request, response);
  } catch (error) {
    functions.logger.error('Cannot load server');
    response.send('Website currently unavailable.');
  }
});
