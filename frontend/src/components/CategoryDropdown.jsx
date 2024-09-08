import React, { useState } from 'react';

const CategoryDropdown = () => {
  // State for dropdown visibility and selected categories
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Available categories (you can replace this with dynamic data)
  const categories = ['Nature', 'Technology', 'Art', 'Food', 'Travel'];

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      // Remove category if already selected
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Input section */}
      <div
        className="border border-gray-300 p-2 rounded-lg flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-2">
          {selectedCategories.length > 0 ? (
            selectedCategories.map((category) => (
              <span
                key={category}
                className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))
          ) : (
            <span className="text-gray-400">Select categories</span>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`h-4 w-4 text-gray-600 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.707a1 1 0 011.415-1.414L10 9.586l3.293-3.293a1 1 0 111.415 1.414l-4 4a1 1 0 01-1.415 0l-4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-2 hover:bg-gray-100 cursor-pointer ${
                  selectedCategories.includes(category) ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
