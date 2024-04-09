import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js'
import blogRouter from './routes/blog-routes.js'


const port = 5000

const app = express()

app.use(express.json()) //------to use json
app.use("/api",router)
app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://sanjaikumar451:XpOGV9sKk3YNiJoW@cluster0.tsvqsra.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>app.listen(port))
    .then(()=>console.log("Connected"))
    .catch((err)=>console.log(err))



//-----------------------------------------------------------------
// app.use('/',(req,res,next)=>{
//     res.send("hello world")
// })

// app.listen(port)
//sanjaikumar451
//XpOGV9sKk3YNiJoW