const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{timestamps: true}
)

export default mongoose.models.User || mongoose.model("User",userSchema)