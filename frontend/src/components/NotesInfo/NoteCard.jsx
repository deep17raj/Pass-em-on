import React from "react";

function NoteCard({ courseName, courseCode, slots, uploader }) {
  return (
    <article className="w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-5 pt-7 pb-3 mx-auto w-full text-xl font-bold text-white bg-gray-500 rounded-3xl max-md:pl-5 max-md:mt-10">
        <header className="self-start text-2xl text-stone-300">
          {courseName}
          <br />
          {courseCode}
        </header>

        <h3 className="self-start mt-10">Slots avialable:</h3>

        <div className="flex gap-7 self-center mt-4 whitespace-nowrap">
          {slots.map((slot, index) => (
            <span
              key={index}
              className="px-6 py-1.5 rounded-xl bg-stone-800 max-md:px-5"
            >
              {slot}
            </span>
          ))}
        </div>

        <footer className="self-end mt-16 text-gray-400 max-md:mt-10">
          Uploaded by {uploader}
        </footer>
      </div>
    </article>
  );
}

export default NoteCard;
