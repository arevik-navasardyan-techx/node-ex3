function validateGuest(req, res, next) {
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).json({ error: "Missing required guest fields" });
  }
  next();
}

function validateRoom(req, res, next) {
  const { room_number, floor, status } = req.body;
  if (!room_number || !floor || !status) {
    return res.status(400).json({ error: "Missing required room fields" });
  }
  if (!["available", "occupied", "maintenance"].includes(status)) {
    return res.status(400).json({ error: "Invalid room status" });
  }
  next();
}

function validateBooking(req, res, next) {
  const {
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    num_guests,
    status,
  } = req.body;
  if (
    !guest_id ||
    !room_id ||
    !check_in_date ||
    !check_out_date ||
    !num_guests ||
    !status
  ) {
    return res.status(400).json({ error: "Missing required booking fields" });
  }
  next();
}

module.exports = {
  validateGuest,
  validateRoom,
  validateBooking,
};
