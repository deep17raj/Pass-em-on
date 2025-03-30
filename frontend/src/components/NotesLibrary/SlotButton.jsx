"use client";
import React from "react";

const SlotButton = ({ slotName, bgColor = "bg-stone-800" }) => {
  return (
    <button
      className={`px-6 py-1.5 rounded-xl ${bgColor} text-white font-bold max-md:px-5`}
      aria-label={`Slot ${slotName}`}
    >
      {slotName}
    </button>
  );
};

export default SlotButton;
