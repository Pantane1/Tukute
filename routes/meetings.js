const express = require("express");
const router = express.Router();
const meetingController = require("../controllers/meetingController");

router.get("/create", meetingController.getCreateMeeting);
router.post("/create", meetingController.createMeeting);
router.get("/initialize/:id", meetingController.getInitializeMeeting);
router.post("/initialize/:id", meetingController.initializeMeeting);
router.get("/dashboard/:id", meetingController.getDashboard);
router.get("/history", meetingController.getHistory);

module.exports = router;
