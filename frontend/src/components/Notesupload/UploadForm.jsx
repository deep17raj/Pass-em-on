"use client";
import React from "react";
import SlotSelection from "./SlotSelection";

const UploadForm = () => {
  return (
    <form className="flex flex-col items-center w-full">
      <div className="flex flex-col self-center mt-16 max-w-full text-2xl text-gray-500 w-[689px] max-md:mt-10">
        <h1 className="self-center text-5xl font-bold text-stone-700 max-md:text-4xl">
          Upload Notes
        </h1>

        <input
          type="text"
          placeholder="Enter Course Name"
          className="px-7 py-5 mt-16 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <input
          type="text"
          placeholder="Enter Course Code"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <SlotSelection />

        <div className="flex flex-col self-center max-w-full text-2xl text-gray-500 w-[689px] mt-20 max-md:mt-10">
          

          <div className="px-16 py-14 mt-4 text-gray-400 rounded-3xl border border-gray-500 border-solid max-md:px-5 max-md:max-w-full">
            <input type="file" name="" id="" placeholder="Upload pdf here"  className="placeholder-[#373737] "/>
          </div>

          <button
            type="submit"
            className="self-center px-9 py-2.5 mt-16 max-w-full whitespace-nowrap bg-gray-400 rounded-3xl text-slate-200 w-[141px] max-md:px-5 max-md:mt-10"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
