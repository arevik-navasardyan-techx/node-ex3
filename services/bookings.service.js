const bookingsRepo = require("../repositories/bookings.repository");
const roomsRepo = require("../repositories/rooms.repository");
const { BadRequest, NotFound, Conflict } = require("../utils/http-errors");

class BookingsService {
  getAll() {
    return bookingsRepo.findAll();
  }

  getById(id) {
    const booking = bookingsRepo.findById(id);
    if (!booking) throw new NotFound("Booking not found");
    return booking;
  }

  create(booking) {
    if (
      !booking.guest_id ||
      !booking.room_id ||
      !booking.check_in_date ||
      !booking.check_out_date ||
      !booking.num_guests
    ) {
      throw new BadRequest("Missing required booking fields");
    }

    const room = roomsRepo.findById(booking.room_id);
    if (!room) throw new NotFound("Room does not exist");

    if (room.status !== "available") {
      throw new Conflict("Room is not available");
    }

    const newBooking = {
      ...booking,
      booking_id: Date.now().toString(),
      status: "reserved",
    };
    return bookingsRepo.create(newBooking);
  }

  update(id, data) {
    const updated = bookingsRepo.update(id, data);
    if (!updated) throw new NotFound("Booking not found");
    return updated;
  }

  delete(id) {
    const deleted = bookingsRepo.remove(id);
    if (!deleted) throw new NotFound("Booking not found");
    return deleted;
  }
}

module.exports = new BookingsService();
