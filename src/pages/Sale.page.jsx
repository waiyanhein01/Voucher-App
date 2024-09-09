import React from 'react'
import BreadcrumbComponent from '../components/Breadcrumb.component'
import ContainerComponent from '../components/Container.component'

const SalePage = () => {
  return (
    <ContainerComponent>
      <BreadcrumbComponent currentPage={"Sale Module"}/>
    </ContainerComponent>
  )
}

export default SalePage
