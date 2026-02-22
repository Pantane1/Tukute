const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participantController");

router.get("/", participantController.getParticipants);
router.get("/add", participantController.getAddForm);
router.post("/add", participantController.addParticipant);

module.exports = router;
