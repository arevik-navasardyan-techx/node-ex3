module.exports = class Room {
  constructor({ room_id, room_number, floor, status }) {
    this.room_id = room_id;
    this.room_number = room_number;
    this.floor = floor;
    this.status = status;
  }
};
