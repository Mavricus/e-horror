import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  logger.info('Received request to root endpoint');
  res.json({ message: 'Welcome to the E-Horror API' });
});

// Start server
app.listen(port, () => {
  logger.info(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});
