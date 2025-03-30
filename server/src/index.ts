import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the E-Horror API' });
});

// Start server
app.listen(port, () => {
  // console.warn(`Server is running on port ${port}`);
});
