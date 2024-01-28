import { useEffect, useState } from "react";
import instance from "../utlis/axios";
import { useDispatch } from "react-redux";
import { addSearchResultData } from "../rtk/searchSlice";

const useGetSearch = (query) => {
  const dispatch = useDispatch();

  const getSearches = async () => {
    try {
      const d = await instance.get(`search/multi?query=${query}/`);
      dispatch(addSearchResultData(d.data?.results));
      
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => {
      getSearches();
    }, 200);

    return () => {
      clearTimeout(t);
    };
  }, [query]);
};

export default useGetSearch;
