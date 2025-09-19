module.exports = class Booking {
  constructor({
    booking_id,
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    num_guests,
    status,
  }) {
    this.booking_id = booking_id;
    this.guest_id = guest_id;
    this.room_id = room_id;
    this.check_in_date = check_in_date;
    this.check_out_date = check_out_date;
    this.num_guests = num_guests;
    this.status = status;
  }
};
