import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course3 } from "../helper/courses";

const Course3 = () => {
  return (
    <CourseLayout
      lessonsOdd={course3[0].lessonsOdd}
      lessonsEven={course3[0].lessonsEven}
      textInfo={course3[0].textInfo}
      title={course3[0].title}
      toBase={course3[0].toBase}
      quiz={course3[0].quiz}
    />
  );
};

export default Course3;
