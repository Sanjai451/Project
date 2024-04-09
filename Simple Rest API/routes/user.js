import express from 'express'
import  {v4 as uuidv4} from 'uuid'
const router = express.Router()

let users= [
    {
        
        name: "Sanjai Kumar",
        age : 19
    }  ,
    {
        name: "Sanjai",
        age : 19
    }  
]
router.get('/',(req,res,next)=>{
    res.send("hello from users")
})

router.get('/detail',(req,res,next)=>{
    res.send({users})
})

router.post('/',(req,res,next)=>{
    const data = req.body

    const userWithId = {...data,id: uuidv4() }
    users.push(userWithId)

    res.send("user added")
})

router.get('/:id',(req,res,next)=>{
    const data = users.filter((user)=>user.id===req.params.id)
    // const data = user.find((user)=> user.id === req.params.id)
    res.send(data)
})

router.delete('/:id',(req,res,next)=>{
    users = users.filter((user)=>user.id!==req.params.id)
    // const data = user.find((user)=> user.id === req.params.id)
    res.send(users)
})

router.patch('/:id',(req,res,next)=>{
    const data = users.find((user)=> user.id === req.params.id)

    const {name,age}= req.body

    if(name){
        data.name = name;
    }
    if(age){
        data.age = age;
    }
    res.send(users)
})

export default router;