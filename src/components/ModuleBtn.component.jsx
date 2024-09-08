import React from "react";
import { Link } from "react-router-dom";

const ModuleBtnComponent = ({ name, icon, url }) => {
  return (
    <div className=" bg-emerald-500 p-5 text-white rounded-lg">
        <Link to={url} className="flex flex-col gap-2 justify-center items-center">
      {icon}
      {name}
    </Link>
    </div>
  );
};

export default ModuleBtnComponent;
