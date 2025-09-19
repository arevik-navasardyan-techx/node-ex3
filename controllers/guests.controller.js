const guestsService = require("../services/guests.service");

class GuestsController {
  async getAll(req, res, next) {
    try {
      res.json(guestsService.getAll());
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      console.log("In guests controller");
      console.log(req.params.id);
      res.json(guestsService.getById(req.params.id));
    } catch (err) {
      console.log("guest controller catch error");
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      res.status(201).json(guestsService.create(req.body));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      res.json(guestsService.update(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      res.status(204).json(guestsService.delete(req.params.id));
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new GuestsController();
