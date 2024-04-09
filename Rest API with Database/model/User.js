import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLenght: 6
    },
    blogs:[{type : mongoose.Types.ObjectId,ref:"Blogs",required:true}]
})

export default mongoose.model("User",userSchema)
//saved as users in mongodb