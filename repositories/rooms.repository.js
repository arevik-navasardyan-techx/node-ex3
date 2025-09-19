const data = require("./data");

class RoomsRepository {
  findAll() {
    return data.rooms;
  }

  findById(id) {
    return data.rooms.find((r) => r.room_id === Number(id));
  }

  create(room) {
    data.rooms.push(room);
    return room;
  }

  update(id, changes) {
    const index = data.rooms.findIndex((r) => r.room_id === Number(id));
    if (index === -1) return null;

    data.rooms[index] = { ...data.rooms[index], ...changes };
    return data.rooms[index];
  }

  remove(id) {
    const index = data.rooms.findIndex((r) => r.room_id === Number(id));
    if (index === -1) return null;

    return data.rooms.splice(index, 1)[0];
  }
}

module.exports = new RoomsRepository();
