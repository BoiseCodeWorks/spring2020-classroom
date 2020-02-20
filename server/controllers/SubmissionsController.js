import express from "express";
import submissionsService from "../services/SubmissionsService";

export default class SubmissionsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await submissionsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await submissionsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await submissionsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await submissionsService.edit(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await submissionsService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
