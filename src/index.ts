import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from local Express server!' });
});

// Start server if running locally
if (process.env.NODE_ENV !== 'lambda') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the app for use in lambda
export default app;
