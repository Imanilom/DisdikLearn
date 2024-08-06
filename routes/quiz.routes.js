const express = require("express");
const quizController = require("../controllers/quiz.controller");
const auth = require("../middlewares/auth");
const { authorize } = require("../utils/role");

const router = express.Router();

// Middleware to ensure user is authenticated
router.use(auth);

// Route to create a quiz under a specific course
router.post(
  "/courses/:courseId/quizzes",
  authorize("instructor"),
  quizController.createQuiz
);

// Route to get all quizzes for a specific course
router.get("/courses/:courseId/quizzes", quizController.getQuizzesByCourse);

// Route to get a specific quiz by its ID
router.get("/courses/:courseId/quizzes/:quizId", quizController.getQuizById);

// Route to update a specific quiz by its ID
router.put(
  "/courses/:courseId/quizzes/:quizId",
  authorize("instructor"),
  quizController.updateQuiz
);

// Route to attempt a quiz, identified by quizId
router.post(
  "/courses/:courseId/quizzes/:quizId/attempt",
  authorize("student"),
  quizController.attemptQuiz
);

module.exports = router;
