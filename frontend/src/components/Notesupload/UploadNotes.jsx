"use client";
import React from "react";
import Header from "../Header/Header";
import UploadForm from "./UploadForm";
import Footer from "../Footer/Footer";

function UploadNotes() {
  return (
    <main className="overflow-hidden pt-4 bg-[#E4EAF7]">
      <div className="flex flex-col items-center px-4 w-full max-md:max-w-full">
        <Header />
        <UploadForm />
      </div>
      <Footer />
    </main>
  );
}

export default UploadNotes;
