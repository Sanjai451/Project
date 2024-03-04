const express = require("express");
const users=require("./sampleName.json")

const app=express();
const port=8000;

//to do operation with file fs package is used
const fs = require("fs")


//to allow cors
const cors=require("cors")
//to always handle as json()
app.use(express.json())
app.use(cors({
    // origin:"http://localhost:5173"
    origin :"*",
    methods:["GET","POST","PATCH","DELETE"]
}))
app.get("/all", (req,res)=>{
    res.send(users)
});

//Display all users
app.get("/users",(req,res)=>{
    return res.json(users)
});
//to check weather running of the server 
//search http://localhost:8000/user in postman
//8000-port number
//user is the parameter in get()

//delete user
app.delete("/users/:todelid",(req,res)=>{
    let idd = Number(req.params.todelid)
    let filteredUsers = users.filter((data)=>
        data.id !== idd 
    )
    fs.writeFile("./sampleName.json",JSON.stringify(filteredUsers),(err,data)=>{
        return res.json(filteredUsers)
    })
})
//add user
app.post("/users",(req,res)=>{
    let {name,age,city}=req.body
    if(!name || !age || !city){
         res.status(400).send({message:"All fields required"})
    }
    else{
        let id = Date.now()
        users.push({id,name,age,city})
        fs.writeFile("./sampleName.json",JSON.stringify(users),(err,data)=>{
        return res.json({message:"All fields added successfully"})
    })
    }
})
//to update
app.patch("/users/:updateid",(req,res)=>{
    let id=Number(req.params.updateid)
    let {name,age,city}=req.body
    if(!name || !age || !city){
         res.status(400).send({message:"All fields required"})
    }
    else{
        let index= users.findIndex((user)=>user.id==id)
        users.splice(index,1,{...req.body})
        fs.writeFile("./sampleName.json",JSON.stringify(users),(err,data)=>{
        return res.json({message:"All fields updated successfully"})
    })
    }
})



app.listen(port,(err)=>{
    console.log(`App is running in port ${port}`);
});