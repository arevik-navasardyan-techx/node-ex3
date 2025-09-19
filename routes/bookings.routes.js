const express = require("express");
const controller = require("../controllers/booking.controller");
const { validateBooking } = require("../middleware/validate");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateBooking, controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
