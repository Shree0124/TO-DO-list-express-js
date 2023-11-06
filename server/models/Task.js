const {schema,model, Schema}=require("mongoose")

// defining the schema

const taskSchema=new Schema({
    task:{
        type:String,
        trim:true,
        required:true
    }
},{timestamps:true})

// modelling while exporting
module.exports=model("task",taskSchema)