"use client";
import React from "react";
import SlotButton from "./SlotButton";

const DifferentialEquationsCard = () => {
  return (
    <section className="flex grow text-xl font-bold max-md:mt-10">
      <article className="flex flex-col items-start pt-7 pb-24 pl-5 rounded-3xl bg-stone-300">
        <header className="mr-0 text-2xl text-stone-700">
          Differential Equations
          <br />
          BMAT102L
        </header>

        <h3 className="self-stretch mt-10 text-gray-500 max-md:mr-2">
          Slots avialable:
        </h3>

        <div className="flex gap-7 mt-4 text-white whitespace-nowrap max-md:ml-2">
          <SlotButton slotName="B2" />
          <SlotButton slotName="D1" />
        </div>
      </article>

      <footer className="grow shrink self-start mt-64 text-gray-500 w-[169px] max-md:mt-10">
        Uploaded by John Doe
      </footer>
    </section>
  );
};

export default DifferentialEquationsCard;
