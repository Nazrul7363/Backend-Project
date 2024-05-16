import dotenv from "dotenv"
import {connectDB} from './db/index.js';
import app from './app.js'
dotenv.config()



connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("Error",error);
        throw error;

    })
    app.listen(process.env.PORT || 8000,()=>{
        `Server is running at Port ${process.env.PORT}`
    })
    app.on()
}).catch((err)=>{
    console.log("Mongo DB Connection failed")
});