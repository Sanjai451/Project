import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import ObjectId from 'mongodb'


const app = express()

const PORT = 5000;

app.use(cors())

app.use(bodyParser.json())

const Schema = new mongoose.Schema({
    task:String
})

const todos = mongoose.model('todos',Schema)

mongoose.connect('mongodb://127.0.0.1/TodoList')
.then(()=>console.log("connection is Successful"))
.catch(err=> console.log("couldn't connect to Mongodb"))



app.get('/',(req,res)=>res.send({sanjai:"hello sanjai from home"}))



app.get('/alldata',async(req,res)=>{
    const data = await todos.find()
    res.send(data) 
})

app.post('/addData',async(req,res)=>{
    let data = req.body;
    console.log("recieved",data.task)
    const result = await todos.insertMany({task:data.task})
    res.send("Success - data inserted") 
})

app.patch('/updateData',async(req,res)=>{
    let data = req.body
    console.log(data)
    const result = await todos.updateOne({_id:data.id},{$set: {
        _id: data.id,
       task: data.task,
      }})
    res.send("Success - updated" ) 
})


//delete todo
app.delete("/deleteData/:id",async(req,res)=>{
    const id = req.params.id;
    const result = await todos.deleteOne({ _id: id });
    res.send("Success - deleted");    
})

app.listen(PORT,()=> console.log("server running on port 5000")) 