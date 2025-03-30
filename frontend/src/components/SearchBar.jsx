"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex-1 mx-auto max-w-[638px] mb-20">
      <div className="flex items-center px-6 w-full bg-gray-400 rounded-3xl h-[39px]">
        <input
          type="text"
          placeholder="Find notes by subject, course, or keywords…"
          className="w-full text-base bg-transparent border-none outline-none placeholder-[#373737]  text-neutral-700"
          aria-label="Search notes"
        />
        <div className="relative">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[25px] h-[25px] flex-shrink-0"
          >
            <path
              d="M17.6321 17.75L21.25 21.25M20.0833 11.9167C20.0833 16.427 16.427 20.0833 11.9167 20.0833C7.40634 20.0833 3.75 16.427 3.75 11.9167C3.75 7.40634 7.40634 3.75 11.9167 3.75C16.427 3.75 20.0833 7.40634 20.0833 11.9167Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
