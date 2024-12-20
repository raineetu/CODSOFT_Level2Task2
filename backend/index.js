import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './db/connection.js';
import userRoutes from './routes/userRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js'; 
import jobRoutes from './routes/jobRoutes.js'; 


// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3000;

//define routes
app.use("/register",userRoutes);
app.use("/company",companyRoutes);
app.use("/application",applicationRoutes);
app.use("/job",jobRoutes);


connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to database", err);
});
