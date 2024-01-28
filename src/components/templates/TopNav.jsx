import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetSearch from "../../hooks/useGetSearch";
import { useSelector } from "react-redux";

const TopNav = () => {
  const [query, setquery] = useState("");
  useGetSearch(query);
  const searchMovieresult = useSelector(store => store.search.seachResult)


  return (
    <div className="w-full m-h-[12vh] relative flex justify-start  items-center ml-[15%] ">
      <i className="ri-search-line text-zinc-400 text-3xl"></i>
      <input
        type="text"
        placeholder="Search anything"
        className="w-[70%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onBlur={() => setquery("")}
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="ri-close-fill text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="w-[60%] max-h-[50vh] bg-zinc-300 absolute top-[90%]  overflow-auto rounded-md ">
      {
  searchMovieresult.map(movie => (
    <Link
      key={movie.id}
      className="flex py-5 px-3 justify-start items-center border-b-2 border-x-zinc-100 duration-300 text-zinc-700 font-semibold hover:text-zinc-900 hover:bg-zinc-200"
    >
      <img
        className="h-[10vh] w-[10vh] object-cover rounded-lg mr-5"
        src={
          movie.backdrop_path || movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`
            : "https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149263898.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706313600&semt=sph"
        }
        alt="Movie Search Movies"
      />
      <span>
        {movie.name || movie.original_name || movie.title}
      </span>
    </Link>
  ))
}

       
      </div>
    </div>
  );
};

export default TopNav;
