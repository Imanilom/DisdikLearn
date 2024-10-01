const Progress = require("../models/progress.model");
const Course = require("../models/course.model");
const Lesson = require("../models/lesson.model");
const userModel = require("../models/user.model");
const checkAndAwardBadge = require("../helpers/gamification.helper");
exports.markLessonAsComplete = async (req, res) => {
  const { courseId, lessonId } = req.params;
  const userId = req.user._id;

  try {
    // Fetch user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Fetch lesson
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    // Fetch or create progress
    let progress = await Progress.findOne({ user: userId, course: courseId });
    if (!progress) {
      progress = new Progress({
        user: userId,
        course: courseId,
        completedLessons: [lessonId],
      });
    } else if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    } else {
      return res.status(200).json({ message: "Lesson already completed" });
    }

    // Save progress and update points
    await progress.save();
    user.points += 10; // Award 10 points for completing a lesson
    await user.save();

    // Check and award badges (make sure this function is correctly implemented)
    await checkAndAwardBadge(user._id);

    res.status(200).json({ message: "Lesson marked as complete" });
  } catch (error) {
    console.error("Error in markLessonAsComplete:", error); // Log the exact error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.CheckCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    // Find the progress record for this user and course
    const progress = await Progress.findOne({ user: userId, course: courseId }).populate('completedLessons');

    if (!progress) {
      // Return a default response if progress is not found
      return res.json({
        completedLessons: []
      });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch progress', error });
  }
};

exports.getCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user._id;

    // Find the progress record for this user and course
    const progress = await Progress.findOne({ user: userId, course: courseId }).populate('completedLessons');

    if (!progress) {
      return res.status(404).json({ message: 'Progress not found' });
    }

    // Find the total number of lessons in the course
    const totalLessons = await Lesson.countDocuments({ course: courseId });

    // Calculate the percentage of completed lessons
    const completedLessonsCount = progress.completedLessons.length;
    const completionPercentage = (completedLessonsCount / totalLessons) * 100;

    res.json({
      progress,
      completionPercentage: completionPercentage.toFixed(2),  // Round to 2 decimal places
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch progress', error });
  }
};

