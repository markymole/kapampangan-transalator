import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="search"
          className="animate hidden font-karla font-semibold md:block dark:text-white"
        >
          Search
        </label>
        <div className=" flex items-center rounded-md bg-white p-1 px-4 shadow-md drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter a word"
            className="w-full px-4 py-1.5 font-karla focus:border-none focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
