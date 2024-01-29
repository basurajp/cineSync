import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetSearch from "../../hooks/useGetSearch";
import { useSelector } from "react-redux";
import LogoNav from "./LogoNav";

const TopNav = () => {
  const [query, setquery] = useState("");
  useGetSearch(query);
  const searchMovieresult = useSelector((store) => store.search.seachResult);

  return (
    <div className="lg:w-[80%] lg:mx-auto  h-10  lg:min-h-[12vh] relative flex justify-start  items-center  w-[90%]  my-4 ml-5 lg:m-0">
      <i className ="ri-menu-line text-2xl mr-2 text-[#6556CD] lg:hidden"></i> 
      <LogoNav />
      <i className="ri-search-line text-zinc-400 text-2xl font-bold lg:text-3xl"></i>
      <input
        type="text"
        placeholder="Search anything"
        className="w-[70%] lg:mx-10 lg:p-5  text-xl outline-none border-none bg-transparent text-white  ml-3 border "
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onBlur={() => setquery("")}
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-zinc-400 lg:text-3xl text-2xl font-bold "
        ></i>
      )}

      <div className="lg:w-[60%] w-[90%]  max-h-[40vh] lg:max-h-[50vh] bg-zinc-300 absolute lg:top-[90%] 
      top-[90%] left-[5%] lg:left-0 overflow-auto rounded-md ">
        {searchMovieresult.map((movie) => (
          <Link
            key={movie.id}
            className="flex py-5 px-3 justify-start items-center border-b-2 border-x-zinc-100 duration-300 text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-200"
          >
            <img
              className="h-[10vh] w-[10vh] object-cover rounded-lg mr-5"
              src={
                movie.backdrop_path || movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      movie.backdrop_path || movie.poster_path
                    }`
                  : "https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149263898.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706313600&semt=sph"
              }
              alt="Movie Search Movies"
            />
            <span>{movie.name || movie.original_name || movie.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
