import express from "express";
import subjectsService from "../services/SubjectsService";

export default class SubjectsController {
  getSubmissionsBySubjectId(arg0, getSubmissionsBySubjectId) {
    throw new Error("Method not implemented.");
  }
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/submissions", this.getSubmissionsBySubjectId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await subjectsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await subjectsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await subjectsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await subjectsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await subjectsService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
