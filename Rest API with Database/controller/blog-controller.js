import { Mongoose } from 'mongoose';
import Blog from '../model/Blog.js'
import User from '../model/User.js';

export const getAllBlocks = async(req,res,next)=>{
    let blogs;
    try {
        blogs= await Blog.find()
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(404).json({message:"Not Found"})
    }
    return res.status(200).json({blogs})
}

export const addBlogs = async(req,res,next)=>{
    const{title,description,image,user} = req.body;


    let existingData;
    try{
        existingData = await Blog.findOne({title});

    }catch(err){
       return console.log(err)
    }
    if(existingData){
        return res.status(400).json({message:"already exit"})
    }
    let existinguser;
    try {
       existinguser = await User.findById(user) 
    } catch (error) {
        console.log(error)
    }
    if(!existinguser){
        return res.status(400).json({message:"unable to find user by given id"})
    }
    const blog = new Blog({
        title,
        description,
        image,
        user
    });

    try {
        const session = await Mongoose.startSession()
        session.startTransaction()
        await blog.save({session})
        existinguser.blogs.push(blog)
        await existinguser.save({session})
        await session.commitTransaction()
    } catch (error) {
        return res.status(500).json({message:"error"})
    }
    return res.status(200).json({blog})
}

export const updateBlog = async(req,res,next)=>{
    const{title,description} = req.body;
    const blogid = req.params.id
    let blog;

    try{
        blog = await Blog.findByIdAndUpdate(blogid,{
            title,
            description
        });
    }catch(err){
       return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message:"Unable to update Blog"})
    }
    return res.status(200).json({blog}) 
}

export const getById = async(req,res,next)=>{
    const blogid = req.params.id
    let blog;

    try{
        blog = await Blog.findById(blogid);
    }catch(err){
       return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message:"Unable to find"})
    }
    return res.status(200).json({blog}) 
}


export const deleteById = async(req,res,next)=>{
    const blogid = req.params.id
    let blog;

    try{
        blog = await Blog.findByIdAndDelete(blogid).populate('user')
        await blog.user.blogs.pull(blog)
        await blog.user.save()
    }catch(err){
       return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message:"Unable to find"})
    }
    return res.status(200).json({message:"successfully"}) 
}
