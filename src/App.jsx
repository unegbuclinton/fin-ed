import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Course1 from "./pages/Course1";

import Home from "./pages/Home";
import Course2 from "./pages/Course2";
import Course3 from "./pages/Course3";
import Course1_Lesson10 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson10";
import Course1_Lesson1 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson1";
import Course1_Lesson2 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson2";
import Course1_Lesson3 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson3";
import Course1_Lesson4 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson4";
import Course1_Lesson5 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson5";
import Course1_Lesson6 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson6";
import Course1_Lesson7 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson7";
import Course1_Lesson8 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson8";
import Course1_Lesson9 from "./components/RegularCourses/courseLessons/course1/Course1_Lesson9";
import Course2_Lesson1 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson1";
import Course2_Lesson2 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson2";
import Course2_Lesson3 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson3";
import Course2_Lesson4 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson4";
import Course2_Lesson5 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson5";
import Course2_Lesson6 from "./components/RegularCourses/courseLessons/course2/Course2_Lesson6";
import Course1Quiz from "./components/RegularCourses/courseLessons/course1/Course1Quiz";
import Course2Quiz from "./components/RegularCourses/courseLessons/course2/Course2Quiz";
import Course3_Lesson1 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson1";
import Course3_Lesson2 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson2";
import Course3_Lesson3 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson3";
import Course3_Lesson4 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson4";
import Course3_Lesson5 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson5";
import Course3_Lesson6 from "./components/RegularCourses/courseLessons/course3/Course3_Lesson6";
import Course4 from "./pages/Course4";
import Course4_Lesson2 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson2";
import Course4_Lesson1 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson1";
import Course4_Lesson3 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson3";
import Course4_Lesson4 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson4";
import Course4_Lesson5 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson5";
import Course4_Lesson6 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson6";
import Course4_Lesson7 from "./components/RegularCourses/courseLessons/course4/Course4_Lesson7";
import Course5_Lesson1 from "./components/RegularCourses/courseLessons/course5/Course5_Lesson1";
import Course5 from "./pages/Course5";
import Course5_Lesson2 from "./components/RegularCourses/courseLessons/course5/Course5_Lesson2";
import Course5_Lesson3 from "./components/RegularCourses/courseLessons/course5/Course5_Lesson3";
import Course5_Lesson4 from "./components/RegularCourses/courseLessons/course5/Course5_Lesson4";
import Course5_Lesson5 from "./components/RegularCourses/courseLessons/course5/Course5_Lesson5";
import Course6_Lesson1 from "./components/RegularCourses/courseLessons/course6/Course6_Lesson1";
import Course6 from "./pages/Course6";
import Course6_Lesson2 from "./components/RegularCourses/courseLessons/course6/Course6_Lesson2";
import Course6_Lesson3 from "./components/RegularCourses/courseLessons/course6/Course6_Lesson3";
import Course6_Lesson4 from "./components/RegularCourses/courseLessons/course6/Course6_Lesson4";
import Course6_Lesson5 from "./components/RegularCourses/courseLessons/course6/Course6_Lesson5";
import Course7_Lesson1 from "./components/RegularCourses/courseLessons/course7/Course7_Lesson1";
import Course7 from "./pages/Course7";
import Course7_Lesson2 from "./components/RegularCourses/courseLessons/course7/Course7_Lesson2";
import Course7_Lesson3 from "./components/RegularCourses/courseLessons/course7/Course7_Lesson3";
import Course7_Lesson4 from "./components/RegularCourses/courseLessons/course7/Course7_Lesson4";
import Course8 from "./pages/Course8";
import Course8_Lesson1 from "./components/RegularCourses/courseLessons/course8/Course8_Lesson1";
import Course8_Lesson2 from "./components/RegularCourses/courseLessons/course8/Course8_Lesson2";
import Course8_Lesson3 from "./components/RegularCourses/courseLessons/course8/Course8_Lesson3";
import Course8_Lesson4 from "./components/RegularCourses/courseLessons/course8/Course8_Lesson4";
import Course8_Lesson5 from "./components/RegularCourses/courseLessons/course8/Course8_Lesson5";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="course1" element={<Course1 />} />
          <Route path="course1/lesson1" element={<Course1_Lesson1 />} />
          <Route path="course1/lesson2" element={<Course1_Lesson2 />} />
          <Route path="course1/lesson3" element={<Course1_Lesson3 />} />
          <Route path="course1/lesson4" element={<Course1_Lesson4 />} />
          <Route path="course1/lesson5" element={<Course1_Lesson5 />} />
          <Route path="course1/lesson6" element={<Course1_Lesson6 />} />
          <Route path="course1/lesson7" element={<Course1_Lesson7 />} />
          <Route path="course1/lesson8" element={<Course1_Lesson8 />} />
          <Route path="course1/lesson9" element={<Course1_Lesson9 />} />
          <Route path="course1/lesson10" element={<Course1_Lesson10 />} />
          <Route path="course1/quiz" element={<Course1Quiz />} />
          <Route path="course2" element={<Course2 />} />
          <Route path="course2/lesson1" element={<Course2_Lesson1 />} />
          <Route path="course2/lesson2" element={<Course2_Lesson2 />} />
          <Route path="course2/lesson3" element={<Course2_Lesson3 />} />
          <Route path="course2/lesson4" element={<Course2_Lesson4 />} />
          <Route path="course2/lesson5" element={<Course2_Lesson5 />} />
          <Route path="course2/lesson6" element={<Course2_Lesson6 />} />
          <Route path="course2/quiz" element={<Course2Quiz />} />
          <Route path="course3" element={<Course3 />} />
          <Route path="course3/lesson1" element={<Course3_Lesson1 />} />
          <Route path="course3/lesson2" element={<Course3_Lesson2 />} />
          <Route path="course3/lesson3" element={<Course3_Lesson3 />} />
          <Route path="course3/lesson4" element={<Course3_Lesson4 />} />
          <Route path="course3/lesson5" element={<Course3_Lesson5 />} />
          <Route path="course3/lesson6" element={<Course3_Lesson6 />} />
          <Route path="course4" element={<Course4 />} />
          <Route path="course4/lesson1" element={<Course4_Lesson1 />} />
          <Route path="course4/lesson2" element={<Course4_Lesson2 />} />
          <Route path="course4/lesson3" element={<Course4_Lesson3 />} />
          <Route path="course4/lesson4" element={<Course4_Lesson4 />} />
          <Route path="course4/lesson5" element={<Course4_Lesson5 />} />
          <Route path="course4/lesson6" element={<Course4_Lesson6 />} />
          <Route path="course4/lesson7" element={<Course4_Lesson7 />} />
          <Route path="course5" element={<Course5 />} />
          <Route path="course5/lesson1" element={<Course5_Lesson1 />} />
          <Route path="course5/lesson2" element={<Course5_Lesson2 />} />
          <Route path="course5/lesson3" element={<Course5_Lesson3 />} />
          <Route path="course5/lesson4" element={<Course5_Lesson4 />} />
          <Route path="course5/lesson5" element={<Course5_Lesson5 />} />
          <Route path="course6" element={<Course6 />} />
          <Route path="course6/lesson1" element={<Course6_Lesson1 />} />
          <Route path="course6/lesson2" element={<Course6_Lesson2 />} />
          <Route path="course6/lesson3" element={<Course6_Lesson3 />} />
          <Route path="course6/lesson4" element={<Course6_Lesson4 />} />
          <Route path="course6/lesson5" element={<Course6_Lesson5 />} />
          <Route path="course7" element={<Course7 />} />
          <Route path="course7/lesson1" element={<Course7_Lesson1 />} />
          <Route path="course7/lesson2" element={<Course7_Lesson2 />} />
          <Route path="course7/lesson3" element={<Course7_Lesson3 />} />
          <Route path="course7/lesson4" element={<Course7_Lesson4 />} />
          <Route path="course8" element={<Course8 />} />
          <Route path="course8/lesson1" element={<Course8_Lesson1 />} />
          <Route path="course8/lesson2" element={<Course8_Lesson2 />} />
          <Route path="course8/lesson3" element={<Course8_Lesson3 />} />
          <Route path="course8/lesson4" element={<Course8_Lesson4 />} />
          <Route path="course8/lesson5" element={<Course8_Lesson5 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
