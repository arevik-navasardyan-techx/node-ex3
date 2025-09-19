const bookingsService = require("../services/bookings.service");

class BookingsController {
  async getAll(req, res, next) {
    try {
      res.json(bookingsService.getAll());
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      res.json(bookingsService.getById(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      res.status(201).json(bookingsService.create(req.body));
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      res.json(bookingsService.update(req.params.id, req.body));
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      bookingsService.delete(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new BookingsController();
