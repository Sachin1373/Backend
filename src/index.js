import dotenv from "dotenv"
import connectdb from "./db/index.js";
import express from "express"

const app=express()

dotenv.config({
    path:'./.env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`); 
    })  
})
.catch((err)=>{
    console.log("Mongo db connection failed!!!!!!!!!!");
    
})