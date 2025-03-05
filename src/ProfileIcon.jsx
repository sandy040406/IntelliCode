import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileIcon = ({ setIsLoggedIn }) => {
  // Hardcoded teacher details (replace with backend data later)
  const teacherDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-800">{teacherDetails.name}</p>
            <p className="text-xs text-gray-600">{teacherDetails.email}</p>
          </div>
          <Link
            to="/teacher" // Redirect to the teacher login page
            onClick={handleLogout} // Call handleLogout on click
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;