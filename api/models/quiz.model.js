const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  questions: [
    {
      question: { type: String, required: true, trim: true },
      image: { type: String, default: '' }, // Add this line
      options: [
        {
          option: { type: String, required: true, trim: true },
        },
      ],
      correctAnswer: { type: Number, required: true },
    },
  ],
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  attempts: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      score: {
        type: Number,
      },
    },
  ],
  picture: {
    type: String,
    default: 'https://via.placeholder.com/1200x400',
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
