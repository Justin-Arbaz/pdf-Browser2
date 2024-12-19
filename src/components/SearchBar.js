import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search PDFs by title..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
