import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course2 } from "../helper/courses";

const Course2 = () => {
  return (
    <CourseLayout
      lessonsOdd={course2[0].lessonsOdd}
      lessonsEven={course2[0].lessonsEven}
      textInfo={course2[0].textInfo}
      title={course2[0].title}
      toBase={course2[0].toBase}
      quiz={course2[0].quiz}
    />
  );
};

export default Course2;
