import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const randomWallpaperData = useSelector(
    (store) => store.wallpaper.walllpaper
  );
  console.log(randomWallpaperData);

  return randomWallpaperData ? (
    <div 
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${
          randomWallpaperData.backdrop_path || randomWallpaperData.poster_path
        })`,
        backgroundPosition: "top left, top right, bottom left, bottom right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full lg:h-[60vh] h-[50vh] flex flex-col justify-end p-[15%] text-white"
    >
      <h1 className="text-5xl font-bold ">
        {randomWallpaperData.name ||
          randomWallpaperData.original_name ||
          randomWallpaperData.title}
      </h1>
      <p>{randomWallpaperData.overview}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Header;
