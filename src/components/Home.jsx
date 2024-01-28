import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import instance from "../utlis/axios";
import { useDispatch, useSelector } from "react-redux";
import { addWallPaperdata } from "../rtk/wallpaperSlice";
import usegetWallpaperData from "../hooks/usegetWallpaperData";
import Header from "./templates/Header";

const Home = () => {
  document.title = "cineSync | Homepage";
  usegetWallpaperData();
  

  return (
    <>
      <SideNav />
      <div className="w-full h-full ">
        <TopNav />
        <Header />
      </div>
    </>
  );
};

export default Home;
