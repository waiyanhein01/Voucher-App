import React from 'react'
import ContainerComponent from '../components/Container.component'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import SearchCreateBtnComponent from '../components/SearchCreateBtn.component'
import VoucherListsComponent from '../components/VoucherLists.component'
import { HiMiniComputerDesktop } from 'react-icons/hi2'

const VoucherPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Voucher Module"}/>
      <SearchCreateBtnComponent url={"/sale"} btnName={"Create New Voucher"} placeholder={"Search vouchers"} icon={<HiMiniComputerDesktop className=" size-5"/>}/>
      <VoucherListsComponent/>
    </ContainerComponent>
  )
}

export default VoucherPage
