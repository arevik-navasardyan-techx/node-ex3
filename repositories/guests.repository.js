const data = require("./data");

class GuestsRepository {
  findAll() {
    return data.guests;
  }

  findById(id) {
    console.log(`repository ${id}`);
    const guest_with_id = data.guests.find((g) => g.guest_id === Number(id));
    console.log(`guest with id`, guest_with_id);
    return guest_with_id;
  }

  create(guest) {
    data.guests.push(guest);
    return guest;
  }

  update(id, changes) {
    const index = data.guests.findIndex((g) => g.guest_id === Number(id));
    if (index === -1) return null;

    data.guests[index] = { ...data.guests[index], ...changes };
    return data.guests[index];
  }

  remove(id) {
    const index = data.guests.findIndex((g) => g.guest_id === Number(id));
    if (index === -1) return null;

    return data.guests.splice(index, 1)[0];
  }
}

module.exports = new GuestsRepository();
