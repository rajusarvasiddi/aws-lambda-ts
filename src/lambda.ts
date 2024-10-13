import awsServerlessExpress from 'aws-serverless-express';
import app from './index';

const server = awsServerlessExpress.createServer(app);

// export const handler = (event: any, context: any) => {
//   return awsServerlessExpress.proxy(server, event, context);
// };
export const handler = app;
