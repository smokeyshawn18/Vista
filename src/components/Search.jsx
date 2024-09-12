import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm  rounded-lg overflow-hidden my-10 mx-auto bg-gray-900 shadow-2xl">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded-md">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-gray-800 text-gray-300 w-full py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-l-md"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm py-2 px-4 border border-teal-600 hover:border-teal-700 rounded-r-md"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchText: PropTypes.func.isRequired,
};

export default Search;
