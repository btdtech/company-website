import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

interface MONGODB_SECRETS {
  PASSWORD: string;
}

export const helloWorld = functions
  .runWith({secrets: ['MONGODB_SECRETS']})
  .https.onRequest((request, response) => {
    functions.logger.info('Hello logs!', {structuredData: true});

    let mongoDbSecrets = {} as MONGODB_SECRETS;

    if (process.env.MONGODB_SECRETS) {
      mongoDbSecrets = JSON.parse(process.env.MONGODB_SECRETS);
    }

    response.send(`Hello ${mongoDbSecrets.PASSWORD}`);
  });
