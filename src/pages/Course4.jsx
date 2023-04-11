import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course4 } from "../helper/courses";

const Course4 = () => {
  return (
    <CourseLayout
      lessonsOdd={course4[0].lessonsOdd}
      lessonsEven={course4[0].lessonsEven}
      textInfo={course4[0].textInfo}
      title={course4[0].title}
      toBase={course4[0].toBase}
    />
  );
};

export default Course4;
