"use client";
import React from "react";
import SlotButton from "./SlotButton";

const CourseCardWithSideSlot = ({
  courseName,
  courseCode,
  mainSlots = [],
  sideSlot,
  uploadedBy,
  bgColor = "#6B7387",
  textColor = "text-stone-300",
  uploaderTextColor = "text-gray-400",
}) => {
  return (
    <article
      className={`flex flex-col px-5 pt-7 pb-3 w-full text-xl font-bold rounded-3xl ${bgColor} max-md:pl-5`}
    >
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col items-start">
          <header className={`text-2xl ${textColor}`}>
            {courseName}
            <br />
            {courseCode}
          </header>

          <h3
            className={`mt-10 ${textColor === "text-stone-300" ? "text-white" : "text-gray-500"}`}
          >
            Slots avialable:
          </h3>

          <div className="flex gap-5 justify-between self-stretch mt-4 max-md:ml-2">
            {mainSlots.map((slot, index) => (
              <SlotButton
                key={index}
                slotName={slot.name}
                bgColor={slot.bgColor || "bg-stone-800"}
              />
            ))}
          </div>
        </div>

        <div className="self-end mt-36 max-md:mt-10">
          <SlotButton
            slotName={sideSlot.name}
            bgColor={sideSlot.bgColor || "bg-stone-800"}
          />
        </div>
      </div>

      <footer className={`self-end mt-16 ${uploaderTextColor} max-md:mt-10`}>
        Uploaded by {uploadedBy}
      </footer>
    </article>
  );
};

export default CourseCardWithSideSlot;
