"use client";
import * as React from "react";
import Header from "../Header/Header";
import ProfileInfo from "../Profile/ProfileInfo";
import NotesList from "./NoteList";
import Footer from "../Footer/Footer";

function OtherProfile() {
  return (
    <main className="overflow-hidden pt-4 bg-[#E4EAF7]">
      <div className="flex flex-col px-4 w-full max-md:max-w-full">
        <Header />
        <ProfileInfo />
        <NotesList />
      </div>
      <Footer />
    </main>
  );
}

export default OtherProfile;
