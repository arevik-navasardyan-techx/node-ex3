const express = require("express");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");

const guestsRoutes = require("./routes/guests.routes");
const roomsRoutes = require("./routes/rooms.routes");
const bookingsRoutes = require("./routes/bookings.routes");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/guests", guestsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/bookings", bookingsRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
