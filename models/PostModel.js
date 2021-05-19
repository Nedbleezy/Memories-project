const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  Creator: String,
  Title: String,
  Message: String,
  Tags: [String],
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  LikeCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", PostSchema);
