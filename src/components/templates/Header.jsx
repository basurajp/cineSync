import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const randomWallpaperData = useSelector(
    (store) => store.wallpaper.walllpaper
  );



  return randomWallpaperData ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${
          randomWallpaperData.backdrop_path || randomWallpaperData.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full lg:h-[70vh] h-[50vh] flex flex-col justify-end lg:p-[5%] pl-[10%] pb-[15%] text-white items-start"
    >
      <h1 className="text-3xl lg:text-5xl font-bold w-3/4">
        {randomWallpaperData.name ||
          randomWallpaperData.original_name ||
          randomWallpaperData.title}
      </h1>
      <p className="w-3/4 text-sm mb-2 lg:mt-3 lg:w-1/2">
        {randomWallpaperData.overview.slice(0, 100)} ...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white  ">
        <i className="ri-megaphone-fill  text-yellow-500 mr-2 "></i>{" "}
        {randomWallpaperData.release_date || 'No info'}
        <i className="ri-disc-fill text-yellow-500 ml-2"></i>{" "}
        {randomWallpaperData.media_type.toUpperCase()}
      </p>
      <Link className="p-3 bg-[#6556CD] rounded-lg  mt-3">Watch Trailer</Link>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Header;
