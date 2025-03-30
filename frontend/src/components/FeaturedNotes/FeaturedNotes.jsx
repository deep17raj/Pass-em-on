"use client";
import React from "react";
import CourseCard from "./CourseCard";
import CourseCardWithSideSlot from "./CourseCardWithSideSlot";
import DifferentialEquationsCard from "./DifferentialEquationsCard";

function FeaturedNotes() {
  return (
    <section className="flex flex-col rounded-none">
      <header className="flex flex-wrap gap-5 justify-between w-full font-bold max-w-[1298px] text-stone-700 max-md:max-w-full">
        <h1 className="text-6xl max-md:max-w-full max-md:text-4xl text-[#552734]">
          Featured Notes
        </h1>
        <a href="#" className="self-end mt-9 text-2xl">
          More &gt;
        </a>
      </header>

      <main className="self-end mt-14 w-full max-w-[1455px] max-md:mt-10 max-md:max-w-full">
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
                    bgColor="bg-gray-500"
                    textColor="text-stone-300"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCard
                    courseName="BEEE"
                    courseCode="BEEE102L"
                    slots={[{ name: "B1" }, { name: "C2" }, { name: "G1" }]}
                    uploadedBy="Jane Doe"
                    bgColor="bg-stone-300"
                    textColor="text-stone-700"
                    uploaderTextColor="text-gray-500"
                  />
                </div>

                <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <CourseCardWithSideSlot
                    courseName="Calculus"
                    courseCode="BMAT101L"
                    mainSlots={[{ name: "A2" }, { name: "E1" }]}
                    sideSlot={{ name: "F2" }}
                    uploadedBy="John Doe"
                    bgColor="bg-gray-500"
                    textColor="text-stone-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <DifferentialEquationsCard />
          </div>
        </div>
      </main>
    </section>
  );
}

export default FeaturedNotes;
