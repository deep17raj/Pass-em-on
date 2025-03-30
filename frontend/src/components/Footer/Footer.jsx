import React from "react";
import logo from "../../assests/logo.svg";

function Footer() {
  return (
    <footer className="px-20 py-11 mt-20 w-full bg-[#1C3657] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-medium text-slate-300 max-md:text-4xl">
             <a href="/">Pass 'em On</a> 
            </h2>
            <p className="self-stretch text-2xl font-medium text-slate-300 max-md:max-w-full">
              The place where every VIT student will land at 
            <div>least once</div>
            </p>
            <div className="flex gap-5 ">
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/926fed44af122d6a63a9667b708743b52144522f?placeholderIfAbsent=true&apiKey=f36dbad0df324b599f480ca6227d92f4"
                  alt="Social media icon"
                  className="object-contain shrink-0 aspect-square w-[25px]"
                />
              </a>
              <a href="#" aria-label="Social media link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fea72c14731f8dbd5356748863b80d59303eb9?placeholderIfAbsent=true&apiKey=f36dbad0df324b599f480ca6227d92f4"
                  alt="Social media icon"
                  className="object-contain shrink-0 aspect-square w-[25px]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="ml-5 w-[43%] max-md:ml-0 max-md:w-full">
          <div className="grow mt-6 max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <nav className="flex flex-col grow font-medium text-slate-300 max-md:mt-10">
                  <h3 className="self-start text-2xl">Sitemap</h3>
                  <ul className="mt-2 text-xl">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Notes Library</a>
                    </li>
                    <li>
                      <a href="/upload">Upload Notes</a>
                    </li>
                    <li>
                      <a href="#">Developers</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="font-medium text-slate-300 max-md:mt-10">
                  <h3 className="text-2xl">Privacy policy</h3>
                  <p className="mt-2 text-xl max-md:mr-2.5">
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;