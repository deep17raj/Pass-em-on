"use client";
import React from "react";
import Header from "../Header/Header";
import AboutContent from "./AboutContent";
import Footer from "../Footer/Footer";

function AboutPage() {
  return (
    <div className="bg-[#E4EAF7] relative w-full bg-s[#E4EAF7] min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default AboutPage;
