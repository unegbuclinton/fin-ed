import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course6 } from "../helper/courses";

const Course6 = () => {
  return (
    <CourseLayout
      lessonsOdd={course6[0].lessonsOdd}
      lessonsEven={course6[0].lessonsEven}
      textInfo={course6[0].textInfo}
      title={course6[0].title}
      toBase={course6[0].toBase}
      quiz={course6[0].quiz}
    />
  );
};

export default Course6;
