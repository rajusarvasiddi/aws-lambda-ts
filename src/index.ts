import express, { Request, Response } from 'express';
import serverless from 'aws-serverless-express';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/echo', (req: Request, res: Response) => {
  res.json({ body: req.body });
});

// Create the serverless Express instance
const server = serverless.createServer(app);

// Lambda handler
export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  return serverless.proxy(server, event, context);
};
