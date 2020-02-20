import mongoose from "mongoose";
import Student from "../models/Student";

const _repository = mongoose.model("Student", Student);

class StudentsService {
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(body) {
    return await _repository.create(body);
  }
  async edit(id, update) {
    //NOTE Prevents the user from changing anything but name
    // let student = await _repository.findById(id);
    // if (update.name) {
    //   student["name"] = update.name;
    // }
    // await student.save();

    delete update.subjects;
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }

  async addSubject(id, subjectId) {
    //return await _repository.findByIdAndUpdate(id, {$push: {subjects: subjectId}})
    let student = await _repository.findById(id);
    student.subjects.push(subjectId);
    await student.save();
    return student;
  }

  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getAll() {
    return await _repository.find({}).populate("subjects");
  }
}

const studentsService = new StudentsService();
export default studentsService;
