import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course7 } from "../helper/courses";

const Course7 = () => {
  return (
    <CourseLayout
      lessonsOdd={course7[0].lessonsOdd}
      lessonsEven={course7[0].lessonsEven}
      textInfo={course7[0].textInfo}
      title={course7[0].title}
      toBase={course7[0].toBase}
      quiz={course7[0].quiz}
    />
  );
};

export default Course7;
