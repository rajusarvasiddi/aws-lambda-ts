import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.removeHeader("x-powered-by");
  res.removeHeader("set-cookie");
  res.removeHeader("Date");
  res.removeHeader("Connection");
   next();
});

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'test lambda raju sarvasiddi!' });
});

// Start server if running locally
if (process.env.NODE_ENV !== 'lambda') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the app for use in lambda
export default app;
