"use client";
import React from "react";
import Header from "../Header/Header";
import SlotSelector from "./SlotSelector";
import Footer from "../Footer/Footer";

function CourseNotesPage() {
  return (
    <main className="flex flex-col w-full bg-slate-200 min-h-screen">
      <Header />

      <section className="px-20 py-8 max-sm:px-5">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-stone-700">
            Engineering Physics
            <br />
            BPHY101L
          </h1>
        </header>

        <h2 className="mb-5 text-2xl text-gray-500">Choose Slot:</h2>

        <SlotSelector />

        <div className="text-2xl text-gray-400 rounded-3xl border border-gray-500 h-[370px] w-[628px] max-md:w-full flex items-center justify-center">
          Image Preview
        </div>

        <div className="flex justify-center mt-12">
          <button className="text-2xl bg-gray-400 rounded-3xl h-[49px] text-slate-200 w-[196px]">
            Request Access
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default CourseNotesPage;
