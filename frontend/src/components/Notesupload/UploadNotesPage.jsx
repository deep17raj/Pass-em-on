"use client";
import React from "react";
import Header from "../Header/Header";

const UploadNotesPage = () => {
  return (
    <main className="flex flex-col w-full bg-slate-200 min-h-screen">
      <Header />
      <section className="px-24 pt-16 max-md:px-12 max-sm:px-5">
        <h2 className="text-5xl font-bold text-stone-700">Upload Notes</h2>
      </section>
    </main>
  );
};

export default UploadNotesPage;
