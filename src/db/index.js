import mongoose from "mongoose";
import { DB_NAME } from "../constans.js";


const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MONGO DB connection established || db Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection Failed : " + error);
        process.exit(1)
    }
}

export default connectDB;
