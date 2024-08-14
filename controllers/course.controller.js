const Course = require("../models/course.model");
const Lesson = require("../models/lesson.model");
const path = require('path');
const fs = require('fs');

// Create Course
const createCourse = async (req, res) => {
  const course = new Course({ ...req.body, createdBy: req.user._id });

  try {
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get course by ID
const getCourseById = async (req, res) => {
  const _id = req.params.id;

  try {
    const course = await Course.findOne({ _id }).populate('createdBy', 'name');

    if (!course) {
      return res.status(404).send({ error: "Course not found." });
    }

    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update course
const updateCourse = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "description", "image"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const course = await Course.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!course) {
      return res.status(404).send({ error: "Course not found." });
    }

    updates.forEach((update) => (course[update] = req.body[update]));
    await course.save();

    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!course) {
      return res.status(404).send({ error: "Course not found." });
    }

    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Enroll Course by Student
const enrollInCourse = async (req, res) => {
  const courseId = req.params.id;
  const studentId = req.user._id;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    if (course.enrolledStudents.includes(studentId)) {
      return res
        .status(400)
        .send({ error: "Student already enrolled in this course" });
    }

    course.enrolledStudents.push(studentId);
    await course.save();

    res
      .status(200)
      .send({ message: "Enrolled in course successfully", course });
  } catch (error) {
    res.status(500).send({ error: "Error enrolling in course" });
  }
};

const uploadCourseMaterial = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    // Expecting the materialUrl to be sent in the request body
    const { materialUrl } = req.body;

    if (!materialUrl) {
      return res.status(400).send({ error: "Material URL is required" });
    }

    // Save the downloadURL to the course materials array
    course.materials.push(materialUrl);
    await course.save();

    res.status(201).send({
      message: "Course material uploaded successfully",
      materialUrl: materialUrl,
    });
  } catch (error) {
    console.error('Error uploading course material:', error);
    res.status(500).send({ error: "Error uploading course material" });
  }
};

// Controller function to get course materials
const getCourseMaterials = (req, res) => {
  const { courseId, filename } = req.params;
  const filePath = path.join(__dirname, '..', 'uploads', filename); // Adjust path as necessary

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send({ error: 'File not found' });
    }

    // Send file
    res.sendFile(filePath, { root: path.join(__dirname, '..', 'uploads') }, (err) => {
      if (err) {
        res.status(500).send({ error: 'Error sending file' });
      }
    });
  });
};

const updateCourseMaterial = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    const materialIndex = course.materials.indexOf(req.params.material);
    if (materialIndex === -1) {
      return res.status(404).send({ error: "Material not found" });
    }

    // Update the material (e.g., replace the existing one)
    course.materials[materialIndex] = req.body.newMaterialPath;
    await course.save();

    res.status(200).send({
      message: "Course material updated successfully",
      material: course.materials[materialIndex],
    });
  } catch (error) {
    res.status(500).send({ error: "Error updating course material" });
  }
};


const deleteCourseMaterial = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    const materialIndex = course.materials.indexOf(req.params.material);
    if (materialIndex === -1) {
      return res.status(404).send({ error: "Material not found" });
    }

    // Remove the material
    course.materials.splice(materialIndex, 1);
    await course.save();

    res.status(200).send({ message: "Course material deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error deleting course material" });
  }
};


// Create course lesson
const createLesson = async (req, res) => {
  const { courseId } = req.params;
  const { title, content, image } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Ensure the user is the course creator
    if (course.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const lesson = new Lesson({
      title,
      content,
      image,
      course: courseId,
    });

    await lesson.save();

    course.lessons.push(lesson._id);
    await course.save();

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLesson = async (req, res) => {
  const { courseId, lessonId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const lesson = await Lesson.findOne({ _id: lessonId, course: courseId });
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateLesson = async (req, res) => {
  const { courseId, lessonId } = req.params;
  const { title, content, image} = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (course.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const lesson = await Lesson.findOneAndUpdate(
      { _id: lessonId, course: courseId },
      { title, content, image },
      { new: true, runValidators: true }
    );

    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteLesson = async (req, res) => {
  const { courseId, lessonId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (course.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const lesson = await Lesson.findOneAndDelete({
      _id: lessonId,
      course: courseId,
    });

    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    course.lessons = course.lessons.filter((id) => id.toString() !== lessonId);
    await course.save();

    res.status(200).json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCourseLessons = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId).populate("lessons");
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const courseWithLessons = {
      _id: course._id,
      title: course.title,
      description: course.description,
      createdBy: course.createdBy,
      lessons: course.lessons,
    };

    res.status(200).json(courseWithLessons);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollInCourse,
  uploadCourseMaterial,
  createLesson,
  updateLesson,
  deleteLesson,
  getLesson,
  getCourseLessons,
  getCourseMaterials,
  deleteCourseMaterial,
  updateCourseMaterial,
};
