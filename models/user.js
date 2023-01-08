import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String},
  admin:{type:String,default:false},
  imageFile:{ type: String},
  userName:{ type: String},
  id: { type: String },
  friends:{
    type:Array,
    default:[]
  },
  location:String,
  occupation:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
},{timestamps:true});

export default mongoose.model("User", userSchema);
