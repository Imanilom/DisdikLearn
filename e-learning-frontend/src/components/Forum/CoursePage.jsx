import React from "react";
import Forum from "./Forum";

const CoursePage = ({ courseId }) => {
  return (
    <div>
      <h1>Course Details</h1>
      <Forum courseId={courseId} />
    </div>
  );
};

export default CoursePage;
