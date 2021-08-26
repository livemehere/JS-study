const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/sendfile", upload.array("myfile", 3), (req, res) => {
  res.send(req.files);
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  }
  next();
});

app.listen(3000);
