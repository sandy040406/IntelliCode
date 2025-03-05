import { useParams, Link } from "react-router-dom";

const StudentSubjectDetails = () => {
  const { subject } = useParams(); // Get the subject name from the URL

  // Hardcoded data for marks and evaluation status (replace with backend data later)
  const marksData = {
    Math: { marks: 85, evaluated: true },
    English: { marks: null, evaluated: false },
    Science: { marks: 92, evaluated: true },
  };

  const subjectData = marksData[subject] || { marks: null, evaluated: false };

  // Handle revaluation request
  const handleRevaluation = () => {
    alert(`Revaluation request submitted for ${subject}.`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center">
      {/* Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50">
        {/* Project Title */}
        <h1 className="text-2xl font-bold text-white font-mono">Intelligrade</h1>

        {/* Back Button */}
        <Link
          to="/student/subjects"
          className="text-white hover:text-gray-300"
        >
          Back to Subjects
        </Link>
      </div>

      {/* Subject Details */}
      <div className="w-full max-w-6xl mt-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          {subject}
        </h1>

        {/* Marks Display */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Your Marks
          </h2>
          {subjectData.evaluated ? (
            <p className="text-xl text-gray-700">
              Your marks: <span className="font-bold">{subjectData.marks}</span>
            </p>
          ) : (
            <p className="text-xl text-gray-700">
              Your answer script is yet to be evaluated.
            </p>
          )}
        </div>
      </div>

      {/* Revaluation Button */}
      {subjectData.evaluated && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={handleRevaluation}
            className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Apply for Revaluation
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentSubjectDetails;