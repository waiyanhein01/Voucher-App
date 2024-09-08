import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ProductListsComponent from '../components/ProductLists.component'
import ContainerComponent from '../components/Container.component'
import SearchCreateBtnComponent from '../components/SearchCreateBtn.component'

const ProductPage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Product Module"}/>
      <SearchCreateBtnComponent/>
      <ProductListsComponent/>
    </ContainerComponent>
  )
}

export default ProductPage
