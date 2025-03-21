const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
require('dotenv').config();

const taskRoutes= require('./routes/taskRoutes');
const app= express();
app.use(express.json());
app.use(cors());
app.use("/tasks",taskRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to database"))
.catch((err)=>console.error(err))

const PORT= 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})