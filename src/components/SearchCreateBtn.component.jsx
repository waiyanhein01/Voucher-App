import React from "react";
import { HiMagnifyingGlass, HiMiniPlus } from "react-icons/hi2";

const SearchCreateBtnComponent = () => {
  return (
    <div className=" flex justify-between items-center mb-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <HiMagnifyingGlass className=" text-stone-400" />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search products"
        />
      </div>
      <div className="">
        <button className="text-white flex items-center gap-1 bg-emerald-500 hover:bg-emerald-700 focus:ring-2 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800">
          Create New Product
          <HiMiniPlus className=" size-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchCreateBtnComponent;
