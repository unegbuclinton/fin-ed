import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course8 } from "../helper/courses";

const Course8 = () => {
  return (
    <CourseLayout
      lessonsOdd={course8[0].lessonsOdd}
      lessonsEven={course8[0].lessonsEven}
      textInfo={course8[0].textInfo}
      title={course8[0].title}
      toBase={course8[0].toBase}
      quiz={course8[0].quiz}
    />
  );
};

export default Course8;
