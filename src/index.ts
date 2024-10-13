import express from 'express';
import serverless from 'aws-serverless-express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Lambda with Express!' });
});

// Create the server
const server = serverless.createServer(app);

// Lambda handler
exports.handler = (event: any, context: any) => {
  return serverless.proxy(server, event, context);
};
