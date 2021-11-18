const express=require('express');
const mongoose =require('mongoose')

const cors =require('cors');

require('dotenv').config();
const app=express()
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;

//Connect to Database
mongoose.connect(uri);
const connection =mongoose.connection;
connection.once('open',()=>{
    console.log('Mongoose database connection established successfully');
})

//Creating Routes

const exerciseRouter=require('./routes/exercises')
const userRouter=require('./routes/users')

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter)


//Listen to Port
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})