import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Userroutes from './routes/UserRoutes.js';

// Environment Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;  

// Middleware
app.use(express.json()); 
app.use("/users", Userroutes); 

// Store Data (Mongoose)
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("Connected to mongoose successfully"))
  .catch((err) => console.error("Cannot connect to mongoose:", err));

// // Start Server
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
