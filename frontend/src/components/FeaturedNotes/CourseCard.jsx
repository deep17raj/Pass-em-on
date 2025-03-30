"use client";
import React from "react";
import SlotButton from "./SlotButton";

const CourseCard = ({
  courseName,
  courseCode,
  slots = [],
  uploadedBy,
  bgColor = "bg-gray-500",
  textColor = "text-stone-300",
  uploaderTextColor = "text-gray-400",
}) => {
  return (
    <article
      className={`flex flex-col px-5 pt-7 pb-3 w-full text-xl font-bold rounded-3xl ${bgColor} max-md:pl-5`}
    >
      <header className={`self-start text-2xl ${textColor}`}>
        {courseName}
        <br />
        {courseCode}
      </header>

      <h3
        className={`self-start mt-10 ${textColor === "text-stone-300" ? "text-white" : "text-gray-500"}`}
      >
        Slots avialable:
      </h3>

      <div className="flex gap-5 self-start mt-4 whitespace-nowrap">
        {slots.map((slot, index) => (
          <SlotButton
            key={index}
            slotName={slot.name}
            bgColor={slot.bgColor || "bg-stone-800"}
          />
        ))}
      </div>

      <footer className={`self-end mt-16 ${uploaderTextColor} max-md:mt-10`}>
        Uploaded by {uploadedBy}
      </footer>
    </article>
  );
};

export default CourseCard;
