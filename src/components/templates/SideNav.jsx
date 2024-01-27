import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const SideNav = () => {
  return (
    <div className="md:block hidden w-[45%]  md:w-[20%]  h-full border-r-2 border-zinc-200 p-3 ">
      <div className="mb-6">
        <Header />
      </div>

      <nav className="flex flex-col text-zinc-400 text-xl  gap- ">
        <h1 className="text-white font-semibold text-xl  mb-5">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-fire-fill"></i> Trending
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-bard-fill mr-2     "></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-movie-2-line mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 mb-2">
          <i class="ri-team-fill mr-2 "></i>
          People
        </Link>
      </nav>

      <hr className="border-none bg-zinc-400 h-[1px]" />

      <nav className="flex flex-col text-zinc-400 text-xl  gap- ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-information-fill mr-2"></i> About cinsSync
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg   p-5 ">
          <i class="ri-phone-fill mr-2"></i>
          Contact us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
