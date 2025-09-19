const roomsService = require("../services/rooms.service");

class RoomsController {
  async getAll(req, res, next) {
    try {
      res.json(roomsService.getAll());
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      res.json(roomsService.getById(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      res.status(201).json(roomsService.create(req.body));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      res.json(roomsService.update(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      roomsService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RoomsController();
