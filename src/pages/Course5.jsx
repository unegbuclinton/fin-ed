import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course5 } from "../helper/courses";

const Course5 = () => {
  return (
    <CourseLayout
      lessonsOdd={course5[0].lessonsOdd}
      lessonsEven={course5[0].lessonsEven}
      textInfo={course5[0].textInfo}
      title={course5[0].title}
      toBase={course5[0].toBase}
      quiz={course5[0].quiz}
    />
  );
};

export default Course5;
