"use client";
import React from "react";
import SearchBar from "../SearchBar";
import logo from "../../assests/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 w-full">
      <h1 className="text-2xl font-medium text-[#552734]"><a href="/"><img src={logo} alt="logo" height={10} /></a></h1>
      <SearchBar />
      <nav className="mb-20">
        <a href="/about" className="text-xl text-[#552734]">
          About Us
        </a>
      </nav>
    </header>
  );
};

export default Header;