import React from "react";
import LayoutComponent from "../components/Layout.component";
import ModuleBtnComponent from "../components/ModuleBtn.component";
import { HiCircleStack, HiDocumentText, HiMiniComputerDesktop } from "react-icons/hi2";
import ContainerComponent from "../components/Container.component";

const DashboardPage = () => {
  return (
    <ContainerComponent>
      <div className=" grid md:grid-cols-3 grid-rows-3 gap-3">
        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Product Module"
            icon={<HiCircleStack className=" size-16" />}
            url="/product"
          />
        </div>

        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Sale Module"
            icon={<HiMiniComputerDesktop className=" size-16"/>}
            url="/sale"
          />
        </div>

        <div className=" col-span-1">
          <ModuleBtnComponent
            name="Voucher Module"
            icon={<HiDocumentText className=" size-16" />}
            url="/voucher"
          />
        </div>
      </div>
    </ContainerComponent>
  );
};

export default DashboardPage;
