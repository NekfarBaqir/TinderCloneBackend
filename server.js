import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import Cors from "cors";
// App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb://localhost/TinderClone";

// Middlewares
app.use(express.json());
app.use(Cors());
// DB Config
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"));
// API End point
app.get("/", (req, res) => {
  return res.status(200).send("HELLO CLEVER PROGRAMMERS!!");
});
app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`server is listening at port : ${port}`));
