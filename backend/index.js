import express from 'express';
import dotenv from 'dotenv';
import connection from './db/connection.js';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to database", err);
});
