import React from "react";

function ProfileInfo() {
  return (
    <section className="mt-20 ml-36 max-w-full w-[683px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[39%] max-md:ml-0 max-md:w-full">
          <figure className="flex flex-col items-center w-full rounded-full aspect-square bg-slate-300 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fc8c852b7cc7e88a416ee9646e761a0d46d1f3?placeholderIfAbsent=true&apiKey=f36dbad0df324b599f480ca6227d92f4"
              alt="Profile picture"
              className="object-contain w-full aspect-square"
            />
          </figure>
        </div>
        <div className="ml-5 w-[61%] max-md:ml-0 max-md:w-full mt-10">
          <div className="flex flex-col self-stretch my-auto text-2xl font-medium text-[#552734] max-md:mt-10">
            <h2 className="font-bold text-[24px]">John Doe</h2>
            <p>johndoe.2024@vitstudent.ac.in</p>
            <p className="self-start">Rating - 4.5</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;