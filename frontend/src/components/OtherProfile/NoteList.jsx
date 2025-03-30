import React from "react";
import NoteCard from "../NotesInfo/NoteCard";

function NotesList() {
  // Sample data for the note cards
  const notes = [
    {
      id: 1,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
      cardIndex:1
    },
    {
      id: 2,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
      cardIndex:2
    },
    {
      id: 3,
      courseName: "Engineering Physics",
      courseCode: "BPYH101L",
      slots: ["A1", "B2", "D2"],
      uploader: "John Doe",
      cardIndex:3
    },
  ];

  return (
    <section>
      <header className="flex flex-wrap gap-5 justify-between self-center mt-11 w-full font-bold max-w-[1222px] text-stone-700 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl max-md:text-4xl ml-12 text-[#552734]">Available Notes</h2>
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
              cardIndex={note.cardIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NotesList;
