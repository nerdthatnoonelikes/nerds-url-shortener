const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Link = require("./models/Link");
const validurl = require("valid-url");
const short = require("shortid");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
  mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
});

app.get("/:id", async (req, res) => {
  const data = await Link.findOne({
    id: req.params.id,
  });

  if (!data) return res.status(429).json({ message: "Invalid id" });

  res.redirect(data.redirect);
});

app.post("/url", (req, res) => {
  const id = short.generate();
  if (validurl.isUri(req.body.redirect)) {
    Link.create({
      id: id,
      redirect: req.body.redirect,
    }).then(() => res.json({ id: id, longurl: req.body.redirect }));
  } else {
    return res.send("Not a valid url");
  }
});
