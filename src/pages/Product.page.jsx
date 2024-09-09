import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ProductListsComponent from '../components/ProductLists.component'
import ContainerComponent from '../components/Container.component'
import SearchCreateBtnComponent from '../components/SearchCreateBtn.component'
import { HiMiniPlus } from 'react-icons/hi2'

const ProductPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Product Module"}/>
      <SearchCreateBtnComponent btnName={"Create New Product"} placeholder={"Search products"} icon={<HiMiniPlus className=" size-5" />}/>
      <ProductListsComponent/>
    </ContainerComponent>
  )
}

export default ProductPage
