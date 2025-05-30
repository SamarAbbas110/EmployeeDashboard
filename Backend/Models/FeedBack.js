import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    enum: ['Work Environment', 'Leadership', 'Growth', 'Others'],
    default: 'Others'

  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  reviewed: {
    type: Boolean,
    default: false,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
