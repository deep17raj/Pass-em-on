"use client";
import React, { useState } from "react";
import axios from "axios";
import SlotSelection from "./SlotSelection"; // Make sure this component updates `slot` state properly

const UploadForm = () => {
  const [cName, setcName] = useState("");
  const [cCode, setcCode] = useState("");
  const [slot, setSlot] = useState("");
  const [file, setFile] = useState(null);
  const [sName, setsName] = useState("");

  const handleImageChange = (event) => {
    setFile(event.target.files[0]); // Store the selected file
  };

  const handleChangeName = (event) => {
    setcName(event.target.value);
  };

  const handleChangeCode = (event) => {
    setcCode(event.target.value);
  };

  const handleChangeSchool = (event) => {
    setsName(event.target.value);
  };

  const handleSlot = (event) => {
    setSlot(event.target.value);
  };

  const handleUpload = async () => {
    console.log("Upload button clicked!"); // Debugging log

    if (!cCode || !slot || !file) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("course_code", cCode);
    formData.append("slot", slot);
    formData.append("image", file); // Image file

    try {
      console.log("Uploading...");
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response);
      if (response.status === 200) {
        alert("Data sent successfully!");
      } else {
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <form className="flex flex-col items-center w-full">
      <div className="flex flex-col self-center mt-16 max-w-full text-2xl text-gray-500 w-[689px] max-md:mt-10">
        <h1 className="self-center text-5xl font-bold text-stone-700 max-md:text-4xl">
          Upload Notes
        </h1>

        <input
          type="text"
          name="courseName"
          value={cName}
          onChange={handleChangeName}
          placeholder="Enter Course Name"
          className="px-7 py-5 mt-16 bg-gray-400 placeholder-[#373737] rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <input
          type="text"
          name="coursecode"
          value={cCode}
          onChange={handleChangeCode}
          placeholder="Enter Course Code"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737] rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <input
          type="text"
          name="schoolName"
          value={sName}
          onChange={handleChangeSchool}
          placeholder="Enter School Name"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737] rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <SlotSelection />
        <input
          type="text"
          name="slot"
          value={slot}
          onChange={handleSlot}
          placeholder="Enter Slot"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737] rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <div className="flex flex-col self-center max-w-full text-2xl text-gray-500 w-[689px] mt-20 max-md:mt-10">
          <div className="px-16 py-14 mt-4 text-gray-400 rounded-3xl border border-gray-500 border-solid max-md:px-5 max-md:max-w-full">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="placeholder-[#373737]"
            />
          </div>

          <button
            type="button" // Changed to prevent form submission refresh
            onClick={handleUpload}
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