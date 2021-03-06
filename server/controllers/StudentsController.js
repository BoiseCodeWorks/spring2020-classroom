import express from "express";
import studentsService from "../services/StudentsService";
import submissionsService from "../services/SubmissionsService";

export default class StudentController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/submissions", this.getSubmissionsByStudentId)
      .post("", this.create)
      .put("/:id", this.edit)
      .put("/:id/addSubject/:subjectId", this.addSubject)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await studentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await studentsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getSubmissionsByStudentId(req, res, next) {
    try {
      let data = await submissionsService.getByStudentId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await studentsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await studentsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async addSubject(req, res, next) {
    try {
      let data = await studentsService.addSubject(
        req.params.id,
        req.params.subjectId
      );
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await studentsService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
