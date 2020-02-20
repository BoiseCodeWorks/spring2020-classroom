import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Submission = new Schema(
  {
    link: { type: String, required: true },
    assignmentId: { type: ObjectId, ref: "Assignment", required: true },
    subjectId: { type: ObjectId, ref: "Subject", required: true },
    studentId: { type: ObjectId, ref: "Student", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
