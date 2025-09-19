const express = require("express");
const controller = require("../controllers/guests.controller");
const { validateGuest } = require("../middleware/validate");

const router = express.Router();

console.log("In guests routes");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateGuest, controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
