import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" flex justify-center h-screen">
      <div className=" flex flex-col justify-center items-center">
        <img src="public/notFound.svg" className=" w-[500px]" alt="" />
        <h1 className=" text-4xl text-stone-800 mt-2">Not Found</h1>

        <Link to={'/'} className=" border py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white mt-4 rounded-lg">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
