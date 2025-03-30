import React from "react";
import NoteCard from "./NoteCard";

function NotesList() {
  // Sample data for the note cards
  const notes = [
    {
      id: 1,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
    },
    {
      id: 2,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
    },
    {
      id: 3,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
    },
  ];

  return (
    <section>
      <header className="flex flex-wrap gap-5 justify-between self-center mt-11 w-full font-bold max-w-[1222px] text-stone-700 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl max-md:text-4xl">My Notes</h2>
        <a href="#" className="self-start mt-5 text-2xl">
          Edit &gt;
        </a>
      </header>

      <div className="self-center mt-7 w-full max-w-[1100px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              courseName={note.courseName}
              courseCode={note.courseCode}
              slots={note.slots}
              uploader={note.uploader}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NotesList;
