"use client";
import React,{useState} from "react";
import SlotSelection from "./SlotSelection";

const UploadForm = () => {
  const [cName,setcName] = useState("");
  const [cCode,setcCode] = useState("");
  const [slot,setSlot] = useState("");
  const [file, setFile] = useState(null);
  const [sName,setsName] = useState("");
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
    if (!cCode || !slot || !file) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("course_code", cCode);
    formData.append("slot", slot);
    formData.append("image", file); // Image file

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Data sent successfully!");
      } else {
        alert("Failed to send data.");
      }
    } catch (error) {
      console.error("Error:", error);
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
          className="px-7 py-5 mt-16 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <input
          type="text"
          name="coursecode"
          value={cCode}
          onChange={handleChangeCode}
          placeholder="Enter Course Code"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />
        <input
          type="text"
          name="schoolName"
          value={sName}
          onChange={handleChangeSchool}
          placeholder="Enter school name"
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />

        <SlotSelection   />
        <input
          type="text"
          name="slot"
          value={slot}
          onChange={handleSlot}
          placeholder="Enter slot "
          className="px-7 py-5 mt-20 bg-gray-400 placeholder-[#373737]  rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex flex-col self-center max-w-full text-2xl text-gray-500 w-[689px] mt-20 max-md:mt-10">
          

          <div className="px-16 py-14 mt-4 text-gray-400 rounded-3xl border border-gray-500 border-solid max-md:px-5 max-md:max-w-full">
            <input type="file" name="" id=""
            accept="image/*" onChange={handleImageChange} placeholder="Upload pdf here"  className="placeholder-[#373737] "/>
          </div>

          <button
            type="submit"
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
