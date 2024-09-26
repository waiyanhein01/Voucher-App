import React from 'react'
import { useParams } from 'react-router-dom'
import ContainerComponent from '../components/Container.component'

const EditProductPage = () => {
  const {id} = useParams()
  return (
    <ContainerComponent>
      EditProductPage
    </ContainerComponent>
  )
}

export default EditProductPage
