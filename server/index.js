import express  from "express"
import cors from "cors"
import morgan from "morgan"
import { db } from "./database.js"
import postRoutes from "./routes/post.js"   
import dotenv from "dotenv"
dotenv.config()


const PORT = process.env.PORT || 5000

const app = express();


app.use(cors());
app.use(express.json({limit: "50mb", extended: true}))
app.use(express.urlencoded({limit: "50mb", extended: true}))
app.use(morgan('dev'))

app.use('/posts', postRoutes)

 
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})