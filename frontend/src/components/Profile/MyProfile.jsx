"use client";
import * as React from "react";
import Header from "../Header/Header";
import ProfileInfo from "./ProfileInfo";
import NotesList from "../NotesInfo/NoteList";
import Footer from "../Footer/Footer";

function MyProfile() {
  return (
    <main className="overflow-hidden pt-4 bg-slate-200">
      <div className="flex flex-col px-4 w-full max-md:max-w-full">
        <Header />
        <ProfileInfo />
        <NotesList />
      </div>
      <Footer />
    </main>
  );
}

export default MyProfile;
