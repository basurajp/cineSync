import { useDispatch } from "react-redux";
import { addWallPaperdata } from "../rtk/wallpaperSlice";
import { useEffect } from "react";
import instance from "../utlis/axios";

const usegetWallpaperData =()=>{


    const dispatch = useDispatch()

    const getheadWallpaper = async () => {
      try {
        const { data } = await instance.get(`/trending/all/day`);
       
        let randomData = (data.results[Math.floor(Math.random()*data.results.length)])
        dispatch(addWallPaperdata(randomData))
  
      } catch (error) {
        console.log("Error : ", error);
      }
    };
  
    useEffect(() => {
      getheadWallpaper();
    }, []);
  
  
    
}

export default usegetWallpaperData