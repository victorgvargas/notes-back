const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to notes app" });
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
