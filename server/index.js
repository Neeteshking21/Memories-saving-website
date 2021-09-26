const express = require('express')
const { getFirestore, collection, getDocs, setDocs } = require('firebase/compact/firestore');
const {User} = require('./database')
const cors = require('cors')
const {db} = require('./database')
const PORT = process.env.port || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req,res)=>res.send("Home page"))
app.post('/add', async (req, res)=>{
    console.log(req.body)
    let doc = db.collection('Users')
    try{
        await doc.set({
            email: req.body.User.email,
            password: req.body.User.password
        })
        res.send({message:"Successfully data added"})
    }
    catch(e){
        console.log(e)
        res.send({message: "Error"});
    }
})
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});