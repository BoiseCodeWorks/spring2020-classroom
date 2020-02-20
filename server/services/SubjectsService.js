import mongoose from "mongoose";
import Subject from "../models/Subject";

const _repository = mongoose.model("Subject", Subject);

class SubjectsService {
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

const subjectsService = new SubjectsService();
export default subjectsService;
