import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit :"16kb"}))
app.use(express.urlencoded({extended:true , limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export default app ; 


// url se jab v data ata to wo express ka req.param handle krta hai aur body me data ane se req.body 

// req.cookies 

// jab v aap midlleware ya fir configuration setting krna ho tab app.use hota hai

// multer is use for file upload 

//middleware : bich me cheking krna ho kuch usike middleware kehta hai 
//like checkiinh if the user exist also there can be multipe middleware 

//(err ,req,res, next -> this is use for middleware)