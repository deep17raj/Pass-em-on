import React from "react";

const SlotButton = ({ slot, className = "" }) => {
  return (
    <button
      className={`px-12 py-3.5 text-2xl text-gray-500  rounded-3xl border border-gray-500  ${className}`}
    >
      {slot}
    </button>
  );
};

export default SlotButton;
