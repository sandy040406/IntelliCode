import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Student from "./Student";
import Teacher from "./Teacher";
import StudentSignup from "./StudentSignup";
import TeacherSignupWithSubjects from "./TeacherSignupWithSubjects";
import TeacherSubjects from "./TeacherSubjects";
import StudentSubjects from "./StudentSubjects";
import SubjectDetails from "./SubjectDetails"; // Import the SubjectDetails component
import StudentSubjectDetails from "./StudentSubjectDetails"; // Import the StudentSubjectDetails component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
        {/* Conditionally render the Login Portal title and buttons */}
        {!isLoggedIn && (
          <>
            <h1 className="text-5xl font-bold text-white mb-8">Login Portal</h1>

            <div className="flex space-x-6 mb-8">
              <Link
                to="/student"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
              >
                Student Login
              </Link>
              <Link
                to="/teacher"
                className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-110"
              >
                Teacher Login
              </Link>
            </div>
          </>
        )}

        <Routes>
          {/* Student Routes */}
          <Route
            path="/student"
            element={<Student setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/student/subjects"
            element={<StudentSubjects setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/student/subjects/:subject"
            element={<StudentSubjectDetails setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/student/signup" element={<StudentSignup />} />

          {/* Teacher Routes */}
          <Route
            path="/teacher"
            element={<Teacher setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/teacher/subjects"
            element={<TeacherSubjects setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/teacher/subjects/:subject"
            element={<SubjectDetails setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/teacher/signup" element={<TeacherSignupWithSubjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;