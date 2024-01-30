import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config()






connectDB()














// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR : ", error)
//         throw error
//        })
//        app.listen(process.env.PORT || 3000,()=>{
//         console.log(`http://locahost:${process.env.PORT || 3000}`)
//        })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })() 

