import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Assignment = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subjectId: { type: ObjectId, ref: "Subject", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Assignment;
