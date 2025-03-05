
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Teacher = ({ setIsLoggedIn }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Set login state to true
    navigate("/teacher/subjects"); // Navigate to the subjects page
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Teacher Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teacher Roll No</label>
            <input
              type="text"
              placeholder="Enter your roll number"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/teacher/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Teacher;