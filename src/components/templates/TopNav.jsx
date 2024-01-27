import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setquery] = useState("");

  return (
    <div className="w-full m-h-[12vh] relative flex justify-start  items-center ml-[15%] ">
      <i class="ri-search-line text-zinc-400 text-3xl"></i>
      <input
        type="text"
        placeholder="Search anything"
        className="w-[70%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      {query.length > 0 && <i onClick={()=>setquery('')} class="ri-close-fill text-zinc-400 text-3xl"></i>}

      <div className="w-[60%] max-h-[50vh] bg-zinc-300 absolute top-[90%]  overflow-auto rounded-md ">
        {/* <Link className="flex py-5 px-3 justify-start items-center border-b-2 border-x-zinc-100 duration-300 text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-200  ">
          <img src="" alt="" />
          <span>Helloe Everyone </span>
        </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
