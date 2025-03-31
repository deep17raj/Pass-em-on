import React,{useState} from "react";

function SlotSelector() {
  const slots = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2",
    "D1",
    "D2",
    "E1",
    "E2",
    "F1",
    "F2",
    "G1",
    "G2",
  ];
  const [selectedValue, setSelectedValue] = useState("");

  
  return (
    <div className="flex flex-wrap gap-12 mb-12 mt-8 max-md:gap-8 max-sm:gap-5">
      <div className="grid grid-cols-4 gap-12 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1 max-sm:gap-5">
        {slots.map((slot, index) => (
          <button
            key={index}
            className="flex items-center justify-center text-2xl text-gray-500 rounded-3xl border border-gray-500 h-[55px] w-[121px]"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SlotSelector;
