import React from "react";
import CourseLayout from "../components/CourseLayout";
import { course1 } from "../helper/courses";

const Course1 = () => {
  return (
    <>
      <CourseLayout
        lessonsOdd={course1[0].lessonsOdd}
        lessonsEven={course1[0].lessonsEven}
        textInfo={course1[0].textInfo}
        title={course1[0].title}
        toBase={course1[0].toBase}
        quiz={course1[0].quiz}
      />
    </>
  );
};

export default Course1;
