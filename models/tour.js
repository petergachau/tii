import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
 location:String,
 phone:Number,
 price:Number,
 brand:String,
  imageFile: { type:String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  picturePath: String,
  userPicturePath: String,
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: [],
  },
},{timestamps:true});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
