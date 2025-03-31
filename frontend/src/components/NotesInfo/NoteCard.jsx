import React from "react";

function NoteCard({ courseName, courseCode, slots, uploader, cardIndex,school }) {
  const bgColor = cardIndex % 2 === 0 ? "bg-[#1C3657]" : "bg-[#4A5568]";

  return (
    <article className="w-[33%] max-md:ml-0 max-md:w-full ">
      <div className={`flex flex-col px-5 pt-7 pb-3 mx-auto w-full text-xl font-bold text-white rounded-3xl max-md:pl-5 max-md:mt-10 ml-20 ${bgColor}`}>
        <header className="self-start text-2xl text-stone-300 ">
          {courseName}
          <br />
          {courseCode}
        </header>

        <h3 className="self-start mt-10">Slots available:</h3>

        <div className="flex gap-7 self-center mt-4 whitespace-nowrap">
          {slots.map((slot, index) => (
            <span
              key={index}
              className="px-6 py-1.5 rounded-xl bg-[#271F1F] max-md:px-5"
            >
              {slot}
            </span>
          ))}
        </div>
        <h5 className="self-start mt-10">School: {school}</h5>

        <footer className="self-end mt-16 text-gray-400 max-md:mt-10">
          Uploaded by {uploader}
        </footer>
      </div>
    </article>
  );
}

export default NoteCard;
