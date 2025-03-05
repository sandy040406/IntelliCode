import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const SubjectDetails = () => {
  const { subject } = useParams(); // Get the subject name from the URL

  // State to manage file uploads
  const [answerSheets, setAnswerSheets] = useState([]);
  const [answerKey, setAnswerKey] = useState(null);
  const [questionPaper, setQuestionPaper] = useState(null);

  // Handle answer sheets upload
  const handleAnswerSheetsUpload = (e) => {
    const files = e.target.files;
    setAnswerSheets([...files]);
  };

  // Handle answer key upload
  const handleAnswerKeyUpload = (e) => {
    const file = e.target.files[0];
    setAnswerKey(file);
  };

  // Handle question paper upload
  const handleQuestionPaperUpload = (e) => {
    const file = e.target.files[0];
    setQuestionPaper(file);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center">
      {/* Navigation Bar */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 left-0 z-50">
        {/* Project Title */}
        <h1 className="text-2xl font-bold text-white font-mono">Intelligrade</h1>

        {/* Back Button */}
        <Link
          to="/teacher/subjects"
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

        {/* Upload Answer Sheets */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Upload Answer Sheets
          </h2>
          <input
            type="file"
            multiple
            onChange={handleAnswerSheetsUpload}
            className="mb-4"
          />
          <p className="text-sm text-gray-600">
            {answerSheets.length > 0
              ? `${answerSheets.length} file(s) selected`
              : "No files selected"}
          </p>
        </div>

        {/* Upload Answer Key */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Upload Answer Key
          </h2>
          <input
            type="file"
            onChange={handleAnswerKeyUpload}
            className="mb-4"
          />
          <p className="text-sm text-gray-600">
            {answerKey ? answerKey.name : "No file selected"}
          </p>
        </div>

        {/* Upload Question Paper */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Upload Question Paper
          </h2>
          <input
            type="file"
            onChange={handleQuestionPaperUpload}
            className="mb-4"
          />
          <p className="text-sm text-gray-600">
            {questionPaper ? questionPaper.name : "No file selected"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;