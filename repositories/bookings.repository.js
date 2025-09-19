const data = require("./data");

class BookingsRepository {
  findAll() {
    return data.bookings;
  }

  findById(id) {
    return data.bookings.find((b) => b.booking_id === Number(id));
  }

  create(booking) {
    data.bookings.push(booking);
    return booking;
  }

  update(id, changes) {
    const index = data.bookings.findIndex((b) => b.booking_id === Number(id));
    if (index === -1) return null;

    data.bookings[index] = { ...data.bookings[index], ...changes };
    return data.bookings[index];
  }

  remove(id) {
    const index = data.bookings.findIndex((b) => b.booking_id === Number(id));
    if (index === -1) return null;

    return data.bookings.splice(index, 1)[0];
  }
}

module.exports = new BookingsRepository();
