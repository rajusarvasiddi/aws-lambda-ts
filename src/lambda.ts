import serverlessExpress from 'aws-serverless-express';
import app from './index';

const server = serverlessExpress.createServer(app);

export const handler = (event: any, context: any) => {
  return serverlessExpress.proxy(server, event, context);
};
