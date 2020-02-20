import express from "express";
import assignmentsService from "../services/AssignmentsService";
import submissionsService from "../services/SubmissionsService";

export default class AssignmentsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/submissions", this.getSubmissionsByAssignment)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await assignmentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getSubmissionsByAssignment(req, res, next) {
    try {
      let data = await submissionsService.getByAssignmentId(req.params.id);
      return res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await assignmentsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await assignmentsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await assignmentsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await assignmentsService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
