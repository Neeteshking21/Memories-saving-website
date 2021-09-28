import express from 'express'

const router = express.Router()

//  localhost:PORT/

router.get('/', (req, res)=>{
    res.send("THIS WORKS")
})git 