const db = require("../config/db");

exports.getParticipants = (req, res) => {
  db.query("SELECT * FROM participants", (err, results) => {
    res.render("participants", { participants: results });
  });
};

exports.getAddForm = (req, res) => {
  res.render("addParticipant");
};

exports.addParticipant = (req, res) => {
  const { name, email, phone } = req.body;

  db.query(
    "INSERT INTO participants (name, email, phone) VALUES (?, ?, ?)",
    [name, email, phone],
    () => {
      res.redirect("/participants");
    }
  );
};
