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
  imageFile: { type: Object, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: [String],
    default: [],
  },
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
