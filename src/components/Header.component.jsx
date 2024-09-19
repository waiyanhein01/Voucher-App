import React from "react";
import ContainerComponent from "./Container.component";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <ContainerComponent className={"mb-5"}>
      <Link to={"/"}>
        <h1 className=" text-3xl font-bold">Voucher App</h1>
        <h2 className=" text-stone-500">MMS Solution</h2>
      </Link>
    </ContainerComponent>
  );
};

export default HeaderComponent;
