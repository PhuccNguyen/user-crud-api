import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Userroutes from './routes/UserRoutes.js';
import User from './models/User.js';

// Environment Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;  

// Middleware
app.use(express.json()); 
app.use("/users", Userroutes); 

app.post('', async () => {
  try {
    
  } catch (error) {
    
  }
})


app.patch('/user-up/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const user = req.body;

    const updateuser = await User.findByIdAndUpdate(id, user, {new: true});

    if (!updateuser) {
      res.status(404).json({message:"User not found"});
    }

    res.status(200).json({message:"User updated", user: updateuser});
 
  } catch (error) {
    res.status(404).json({message:" Couldn't find user", error: error});
  }
})

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
