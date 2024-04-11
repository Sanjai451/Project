import { Mongoose, Schema ,model} from "mongoose";

const TransactionSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:Number,
        required:true
    },
    datetime:{
        type:Date,
        required:true
    }
})

export default model("TransactionModel" , TransactionSchema)