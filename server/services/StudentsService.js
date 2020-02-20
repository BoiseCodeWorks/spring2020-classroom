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
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getAll() {
    return await _repository.find({});
  }
}

const studentsService = new StudentsService();
export default studentsService;
