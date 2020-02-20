import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Subject = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Subject;
