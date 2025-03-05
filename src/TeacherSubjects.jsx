import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon"; // Import the ProfileIcon component

const TeacherSubjects = ({ setIsLoggedIn }) => {
  // Hardcoded list of subjects (replace with backend data later)
  const subjects = [
    "Math",
    "English",
    "Science",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Art",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center">
      {/* Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50">
        {/* Project Title */}
        <h1 className="text-2xl font-bold text-white font-mono">Intelligrade</h1>

        {/* Profile Icon */}
        <div className="flex items-center">
          <ProfileIcon setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>

      {/* Subjects Display */}
      <div className="w-full max-w-6xl mt-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Your Subjects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/teacher/subjects/${subject}`} // Navigate to SubjectDetails page
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <span className="text-2xl font-semibold text-blue-800">
                {subject}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSubjects;