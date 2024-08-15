const Quiz = require("../models/quiz.model");
const Course = require("../models/course.model");

const createQuiz = async (req, res) => {
  const quiz = new Quiz({ ...req.body, course: req.params.courseId });

  try {
    await quiz.save();

    // Add the quiz ID to the corresponding course
    await Course.findByIdAndUpdate(
      req.params.courseId,
      { $push: { quizzes: quiz._id } },
      { new: true, useFindAndModify: false }
    );

    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const updates = req.body;

    // Find the quiz by ID and update it with the provided data
    const quiz = await Quiz.findByIdAndUpdate(quizId, updates, {
      new: true, // Return the updated document
      runValidators: true // Ensure validators are applied
    });

    if (!quiz) {
      return res.status(404).send({ error: "Quiz not found" });
    }

    res.send(quiz);
  } catch (error) {
    res.status(400).send({ error: "Error updating quiz" });
  }
};

// Delete a specific question from a quiz
const deleteQuestion = async (req, res) => {
  const { courseId, quizId, questionIndex } = req.params;
  try {
    const quiz = await Quiz.findOne({ _id: quizId, course: courseId });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    quiz.questions.splice(questionIndex, 1);
    await quiz.save();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a quiz
const deleteQuiz = async (req, res) => {
  const { courseId, quizId } = req.params;
  try {
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const quizIndex = course.quizzes.indexOf(quizId);
    if (quizIndex > -1) {
      course.quizzes.splice(quizIndex, 1);
      await course.save();
    }

    await Quiz.findByIdAndDelete(quizId);
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getQuizzesByCourse = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ course: req.params.courseId });
    res.send(quizzes);
  } catch (error) {
    res.status(500).send();
  }
};


const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).send({ error: "Quiz not found" });
    }
    res.send(quiz);
  } catch (error) {
    res.status(500).send({ error: "Error fetching quiz" });
  }
};

const attemptQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).send({ error: "Quiz not found" });
    }
    const courseId = quiz.course._id;
    const studentId = req.user._id;
    const course = await Course.findById(courseId);

    if (!course.enrolledStudents.includes(studentId)) {
      return res.status(403).send({
        error: "You must be enrolled in the course to attempt the quiz",
      });
    }
    const answers = req.body.answers;
    const totalQuestions = quiz.questions.length;
    let correctAnswers = 0;

    for (let i = 0; i < totalQuestions; i++) {
      if (answers[i] === quiz.questions[i].correctAnswer) {
        correctAnswers++;
      }
    }

    const score = (correctAnswers / totalQuestions) * 100;

    quiz.attempts.push({ student: req.user._id, score });
    await quiz.save();

    res.status(200).send({ message: "Quiz attempted successfully", score });
  } catch (error) {
    res.status(500).send({ error: "Error attempting quiz" });
  }
};

module.exports = {
  createQuiz,
  getQuizzesByCourse,
  attemptQuiz,
  getQuizById,
  updateQuiz,
  deleteQuestion,
  deleteQuiz,
};
