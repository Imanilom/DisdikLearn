const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  image: {
    type: String,
    default:
      'https://via.placeholder.com/1200x400',
  },
});

module.exports = mongoose.model("Lesson", lessonSchema);
