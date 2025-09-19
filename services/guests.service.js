const guestsRepo = require("../repositories/guests.repository");
const { NotFound, BadRequest } = require("../utils/http-errors");

class GuestsService {
  getAll() {
    return guestsRepo.findAll();
  }

  getById(id) {
    console.log(id);
    const guest = guestsRepo.findById(id);
    if (!guest) throw new NotFound("Guest not found");
    return guest;
  }

  create(guest) {
    if (!guest.first_name || !guest.last_name || !guest.email) {
      throw new BadRequest("Missing required fields");
    }
    return guestsRepo.create({ ...guest, guest_id: Date.now().toString() });
  }

  update(id, data) {
    const updated = guestsRepo.update(id, data);
    if (!updated) throw new NotFound("Guest not found");
    return updated;
  }

  delete(id) {
    const deleted = guestsRepo.remove(id);
    if (!deleted) throw new NotFound("Guest not found");
    return deleted;
  }
}

module.exports = new GuestsService();
