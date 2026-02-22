const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const participantRoutes = require("./routes/participants");
const meetingRoutes = require("./routes/meetings");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/participants", participantRoutes);
app.use("/meetings", meetingRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
