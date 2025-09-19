const express = require("express");
const controller = require("../controllers/rooms.controller");
const { validateRoom } = require("../middleware/validate");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateRoom, controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
