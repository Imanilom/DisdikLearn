const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const progressController = require("../controllers/progress.controller");

router.post(
  "/courses/:courseId/lessons/:lessonId/complete",
  auth,
  progressController.markLessonAsComplete
);

router.get(
  "/courses/:courseId/checkprogress",
  auth,
  progressController.CheckCourseProgress
);

router.get(
  "/courses/:courseId/getprogress",
  auth,
  progressController.getCourseProgress
);

module.exports = router;
