"use client";
import React from "react";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 w-full">
      <h1 className="text-2xl font-medium text-[#552734]">Pass 'em On</h1>
      <SearchBar />
      <nav>
        <a href="/about" className="text-xl text-[#552734]">
          About Us
        </a>
      </nav>
    </header>
  );
};

export default Header;