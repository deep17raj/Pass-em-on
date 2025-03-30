"use client";
import React from "react";
import Header from "../Header/Header";
import CourseCard from "./CourseCard";
import Footer from "../Footer/Footer";


function FeaturedNotes() {
  return (
    <div>
      <Header/>
    <section className=" mt-5 flex flex-col rounded-none">
      <header className="flex flex-wrap gap-5 justify-between w-full font-bold max-w-[1298px] text-stone-700 max-md:max-w-full">
        <h1 className="text-6xl max-md:max-w-full max-md:text-4xl text-[#552734]">
          Notes Library
        </h1>
        <a href="#" className="self-end mt-9 text-2xl text-[#552734]">
          More &gt;
        </a>
      </header>

      <main className="self-end mt-14 w-full max-w-[1455px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[78%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Engineering Physics"
                    courseCode="BPYH101L"
                    slots={[
                      { name: "A1" },
                      { name: "B2" },
                      { name: "D2", bgColor: "bg-stone-700" },
                    ]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="BEEE"
                    courseCode="BEEE102L"
                    slots={[{ name: "B1" }, { name: "C2" }, { name: "G1" }]}
                    uploadedBy="Jane Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-700"
                    uploaderTextColor="text-gray-500"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Calculus"
                    courseCode="BMAT101L"
                    slots={[{ name: "A2" }, { name: "E1" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Differential Equations"
                    courseCode="BMAT102L"
                    slots={[{ name: "B2" }, { name: "E2" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-300"
                    uploaderTextColor="text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
      <main className="self-end mt-14 w-full max-w-[1455px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[78%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Engineering Physics"
                    courseCode="BPYH101L"
                    slots={[
                      { name: "A1" },
                      { name: "B2" },
                      { name: "D2", bgColor: "bg-stone-700" },
                    ]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="BEEE"
                    courseCode="BEEE102L"
                    slots={[{ name: "B1" }, { name: "C2" }, { name: "G1" }]}
                    uploadedBy="Jane Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-700"
                    uploaderTextColor="text-gray-500"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Calculus"
                    courseCode="BMAT101L"
                    slots={[{ name: "A2" }, { name: "E1" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Differential Equations"
                    courseCode="BMAT102L"
                    slots={[{ name: "B2" }, { name: "E2" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-300"
                    uploaderTextColor="text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
      <main className="self-end mt-14 w-full max-w-[1455px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[78%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Engineering Physics"
                    courseCode="BPYH101L"
                    slots={[
                      { name: "A1" },
                      { name: "B2" },
                      { name: "D2", bgColor: "bg-stone-700" },
                    ]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="BEEE"
                    courseCode="BEEE102L"
                    slots={[{ name: "B1" }, { name: "C2" }, { name: "G1" }]}
                    uploadedBy="Jane Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-700"
                    uploaderTextColor="text-gray-500"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Calculus"
                    courseCode="BMAT101L"
                    slots={[{ name: "A2" }, { name: "E1" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#6B7387]"
                    textColor="text-stone-300"
                  />
                </div>
                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="Differential Equations"
                    courseCode="BMAT102L"
                    slots={[{ name: "B2" }, { name: "E2" },{ name: "F2" }]}
                    uploadedBy="John Doe"
                    bgColor="bg-[#1C3657]"
                    textColor="text-stone-300"
                    uploaderTextColor="text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </section>
    <Footer/>
    </div>
  );
}

export default FeaturedNotes;
