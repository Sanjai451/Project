import User from "../model/User.js";
import bcrypt from 'bcryptjs'
export const getAllUser = async(req,res,next)=>{
    let users;
    try{
        users= await User.find()
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message : "error while loading the data"})
    }
    return res.status(200).json({users})
}

export const signup = async(req,res,next)=>{
    const {name,email,password} = req.body;

    let existinguser;
    try{
        existinguser = await User.findOne({email});

    }catch(err){
       return console.log(err)
    }
    if(existinguser){
        return res.status(400).json({message:"already exit"})
    }

    const hashedpassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password:hashedpassword,
        blogs:[]
    })
   
    try{
       await user.save()
    }catch(err){
       return console.log(err)
    }
    return res.status(201).json({user})
}

export const login = async(req,res,next)=>{
    const{email,password} = req.body;
    let existinguser;
    try{
        existinguser = await User.findOne({email})
    }catch(err){
        return console.log(err)
    }
    if(!existinguser){
        return res.status(404).json({message:"could'n find user"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existinguser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"login successfull"})
}



