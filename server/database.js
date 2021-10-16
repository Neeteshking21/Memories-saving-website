import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URI= process.env.URI

// console.log(URI)

const db = await mongoose.connect( URI , { useNewUrlParser:true, useUnifiedTopology: true })
    .then(()=> console.log(`Database is connected🤩`))
    .catch((err)=>{console.log(`Database connection error😢: ${err}`); return null})


export {db}