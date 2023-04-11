import React, { useState } from "react";
import { course1Quiz } from "../../../../helper/quiz";
// import Modal from "../../../Modal";
import QuizComponent from "../../../QuizComponent";
import "../course.css";

const Course1Quiz = () => {
  // const [modal, setModal] = useState(false);
  // const resultModal = (a) => {
  //   return a;
  // };
  // const closeModal = () => {
  //   setModal(false);
  // };
  return <QuizComponent quizItems={course1Quiz} />;
};

export default Course1Quiz;
