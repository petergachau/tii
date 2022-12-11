import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  admin:{type:String,default:false},
  imageFile:{ type: String},
  userName:{ type: String},
  id: { type: String },
  friends:{
    type:Array,
    default:[]
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("User", userSchema);
