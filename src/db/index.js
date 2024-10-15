import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb= async () =>{
   
    try {
       const connectionInstant= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!!!! DB Host:${connectionInstant.connection.host}`);
        
    } catch (error) {
        console.log("Error:",error);
        process.exit(1)
        
    }
}

export default connectdb