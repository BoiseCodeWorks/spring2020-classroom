import mongoose from "mongoose";
import Assignment from "../models/Assignment";

const _repository = mongoose.model("Assignment", Assignment);

class AssignmentsService {
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
    return await _repository.find({}).populate("subjectId");
  }
}

const assignmentsService = new AssignmentsService();
export default assignmentsService;
