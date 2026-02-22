const db = require("../config/db");

exports.getCreateMeeting = (req, res) => {
  db.query("SELECT * FROM participants", (err, participants) => {
    res.render("createMeeting", { participants });
  });
};

exports.createMeeting = (req, res) => {
  const { topic, message, meeting_time, participants } = req.body;

  db.query(
    "INSERT INTO meetings (topic, message, meeting_time, status) VALUES (?, ?, ?, 'scheduled')",
    [topic, message, meeting_time],
    (err, result) => {
      const meetingId = result.insertId;

      if (participants) {
        participants.forEach((pid) => {
          db.query(
            "INSERT INTO meeting_participants (meeting_id, participant_id, payment_status) VALUES (?, ?, 'pending')",
            [meetingId, pid]
          );
        });
      }

      res.redirect(`/meetings/initialize/${meetingId}`);
    }
  );
};

exports.getInitializeMeeting = (req, res) => {
  const meetingId = req.params.id;

  db.query(
    `SELECT p.* FROM participants p
     JOIN meeting_participants mp
     ON p.id = mp.participant_id
     WHERE mp.meeting_id = ?`,
    [meetingId],
    (err, participants) => {
      res.render("initializeMeeting", { participants, meetingId });
    }
  );
};

exports.initializeMeeting = (req, res) => {
  const meetingId = req.params.id;
  const { amount } = req.body;

  db.query(
    "UPDATE meetings SET amount=?, status='initialized' WHERE id=?",
    [amount, meetingId],
    () => {
      res.redirect(`/meetings/dashboard/${meetingId}`);
    }
  );
};

exports.getDashboard = (req, res) => {
  const meetingId = req.params.id;

  db.query("SELECT * FROM meetings WHERE id=?", [meetingId], (err, meeting) => {
    db.query(
      `SELECT p.name, p.phone, mp.payment_status
       FROM meeting_participants mp
       JOIN participants p ON mp.participant_id = p.id
       WHERE mp.meeting_id=?`,
      [meetingId],
      (err, participants) => {
        res.render("dashboard", {
          meeting: meeting[0],
          participants
        });
      }
    );
  });
};

exports.getHistory = (req, res) => {
  db.query("SELECT * FROM meetings ORDER BY created_at DESC", (err, meetings) => {
    res.render("history", { meetings });
  });
};
