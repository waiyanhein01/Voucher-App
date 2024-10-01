import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SearchCreateBtnComponent = ({placeholder,btnName,url,icon}) => {
  return (
    <div className=" flex justify-between items-center mb-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <HiMagnifyingGlass className=" text-stone-400" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 outline-none block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
      <div className="">
        <Link to={url} className="text-white flex items-center gap-1 bg-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-800">
          {btnName}
          {icon}
        </Link>
      </div>
    </div>
  );
};

export default SearchCreateBtnComponent;
