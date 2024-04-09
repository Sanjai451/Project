import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/user.js';

const app = express()
const PORT = 5000;

app.use(bodyParser.json())

app.get('/',(req,res,next)=>res.send("hello from home"))
app.use('/user',userRouter)

app.listen(PORT,()=> console.log("server running on port 5000"))