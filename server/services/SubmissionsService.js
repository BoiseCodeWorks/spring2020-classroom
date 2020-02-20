import mongoose from "mongoose";
import Submission from "../models/Submission";

const _repository = mongoose.model("Submission", Submission);

class SubmissionsService {
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

const submissionsService = new SubmissionsService();
export default submissionsService;
