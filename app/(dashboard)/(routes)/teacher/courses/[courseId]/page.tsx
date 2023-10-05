import React from "react";

function CourseIdPage({ params }: { params: { courseId: string } }) {
  return <div>courseId: {params.courseId}</div>;
}

export default CourseIdPage;
