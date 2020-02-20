import mongoose from "mongoose";
import Assignment from "../models/Assignment";

const _repository = mongoose.model("Assignment", Assignment);

class AssignmentsService {
  edit(id, body) {
    throw new Error("Method not implemented.");
  }
  delete(id) {
    throw new Error("Method not implemented.");
  }
  async getAll() {
    return await _repository.find({});
  }
}

const assignmentsService = new AssignmentsService();
export default assignmentsService;
