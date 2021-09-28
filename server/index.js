import express  from "express"
import cors from "cors"
import morgan from "morgan"
import {getDoc, updateDoc, addDoc, collection}  from 'firebase/firestore/lite';
import { db } from "./database.js"
const PORT = process.env.PORT || 5000
const app = express();
app.use(cors());
app.use(express.json({limit: "50mb", extended: true}))
app.use(express.urlencoded({limit: "50mb", extended: true}))
app.use(morgan('dev'))
// app.use(db)
const docRed =  await addDoc(collection(db, "Cities"), {
    title: 'Firts',
    description:'this is my first meemory save',
    data: Date.now()

}).then(()=> app.listen(PORT, () => {console.log(`Server started on http://localhost${PORT}`)}))
  .catch((err)=>console.log('Data Base connection error \n ' + err))
    


app.get('/', (req, res) => {
    res.send({"Hello":"Yes"});
});

app.post('/add', (req, res)=>{

    const data = req.body;

    console.log(data.name)

})

