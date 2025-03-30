import React from "react";
import hero from "../../assests/hero2.png";
import searchLogo from "../../assests/logo.png";
import lendAndEarn from "../../assests/lal.png";
import studyAndSucceed from "../../assests/sas.png";
import Footer from "../Footer/Footer";
import FeaturedNotes from "../FeaturedNotes/FeaturedNotes";
import logo from "../../assests/logo.svg";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#E4EAF7" }}>
    <div className="px-8 py-5" style={{ backgroundColor: "#E4EAF7" }}>
      <nav className="flex  justify-between items-center  ">
        <div className="text-[#552734] text-[25px] font-medium">
          <a href="/"><img src={logo} alt="logo"  height={20}/></a>
        </div>
        <div className="flex gap-8 mb-20">
          <div className="text-[#552734] text-[20px]"><a href="/upload">Upload Notes</a></div>
          <div className="text-[#552734] text-[20px]"><a href="/dashboard">Dashboard</a></div>
          <div className="text-[#552734] text-[20px]"><a href="/about">About Us</a></div>
          <div
            className="text-[#552734] text-[25px] border border-[#552734] px-2 "
            style={{ borderRadius: "15px" }}
          >
           <a href="/login">Login</a> 
          </div>
        </div>
      </nav>

      <section className="flex mt-8 gap-5 ml-12">
        <div>
          <h2 className="text-[#552734] text-[55px] font-bold font-[Special Elite] w-[690px]">
            Borrow & Lend Notes - Let’s Ace Exams Together
          </h2>
          <p className="text-[#552734] text-[24px] italic font-semibold mt-4">
            Find and share notes from your verified peers and earn rewards!
          </p>
          <div className="bg-[#E4EAF7] mt-5">
      <form >
        <div id="search" className="">
          <input
            type="text"
            name="q"
            className=" border w-full rounded-2xl  p-4  dark:text-[#000000] placeholder-[#373737]  bg-[#A4ABBD]"
            placeholder="Find notes by subject, course, or keywords…"
          />
          <button type="submit" className="relative -ml-10">
            <svg
              className="text-[#000] h-5 w-5 fill-current dark:text-[#000]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
        </div>
        <div className="ml-20">
          <img src={hero} alt="hero" />
        </div>
      </section>

      <section className="ml-12 ">
        <h3 className="text-[#552734] text-[60px] font-bold">How It Works</h3>
        <div className=" flex gap-[250px]">
          <div
            className="w-[272px] h-[214px] bg-[#B1C5DE] "
            style={({ backgroundColor: "#B1C5DE" }, { borderRadius: "20px" })}
          >
            <a href="#search"><img src={searchLogo} alt="Search & Borrow" className="" /></a>
          </div>

          <div
            className="w-[272px] h-[214px] bg-[#B1C5DE]"
            style={({ backgroundColor: "#B1C5DE" }, { borderRadius: "20px" })}
          >
            <a href="/upload"><img src={lendAndEarn} alt="Lend & Learn" /></a>
            
          </div>
          <div
            className="w-[272px] h-[214px] bg-[#B1C5DE] ml-10"
            style={({ backgroundColor: "#B1C5DE" }, { borderRadius: "20px" })}
          >
            <a href="/library"><img
              src={studyAndSucceed}
              alt="Study & Succeed"
              className="w-[233px] h-[185px]"
            /></a>
          </div>
        </div>
        <div className="  flex gap-[290px] pl-12 w-full">
          <p className="text-[#552734] text-[22px] font-bold w-[272px]">
            Search & Borrow
          </p>
          <p className="text-[#552734] text-[22px] font-bold w-[272px]">
            Lend & Learn
          </p>
          <p className="text-[#552734] text-[22px] font-bold w-[272px] ">
            Study & Succeed
          </p>
        </div>
      </section>
      <FeaturedNotes/>
      
        </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
