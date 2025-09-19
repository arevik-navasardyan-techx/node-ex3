const roomsRepo = require("../repositories/rooms.repository");
const { BadRequest, NotFound } = require("../utils/http-errors");

class RoomsService {
  getAll() {
    return roomsRepo.findAll();
  }

  getById(id) {
    const room = roomsRepo.findById(id);
    if (!room) throw new NotFound("Room not found");
    return room;
  }

  create(room) {
    if (!room.room_number || !room.floor || !room.status) {
      throw new BadRequest("Missing required fields");
    }
    const newRoom = { ...room, room_id: Date.now().toString() };
    return roomsRepo.create(newRoom);
  }

  update(id, data) {
    const updated = roomsRepo.update(id, data);
    if (!updated) throw new NotFound("Room not found");
    return updated;
  }

  delete(id) {
    const deleted = roomsRepo.remove(id);
    if (!deleted) throw new NotFound("Room not found");
    return deleted;
  }
}

module.exports = new RoomsService();
