import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import  TransactionModel  from './models/Transaction.js'
const app = express()

app.use(bodyparser.json())
app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res,next)=>{
    res.json("test ook2")
})

app.post('/transaction',async(req,res)=>{
    const {name,description,datetime} = req.body;


    console.log('result',req.body)
    res.json(req.body)

    await mongoose.connect('mongodb+srv://sanjaikumar451:RD0qRq7HJyqlVObz@cluster0.gkampro.mongodb.net/')
    const result =  await TransactionModel.create({name,description,datetime})

    console.log(result)
})

app.get('/transactions' ,async (req,res,next)=>{
    await mongoose.connect('mongodb+srv://sanjaikumar451:RD0qRq7HJyqlVObz@cluster0.gkampro.mongodb.net/')
    const resultTransaction = await TransactionModel.find({})
    res.json(resultTransaction)
})

app.listen(8500,()=>console.log("running at port 8500 "))
//sanjaikumar451
//mongodb+srv://sanjaikumar451:<password>@cluster0.gkampro.mongodb.net/
//RD0qRq7HJyqlVObz