const { Schema, model } = require("mongoose");

const LinkSchema = new Schema({
  id: String,
  redirect: String,
});

module.exports = model("Link", LinkSchema);
