import React from 'react'
import HeaderComponent from './Header.component'
import { Outlet } from 'react-router-dom'

const LayoutComponent = () => {
  return (
    <main className=' flex flex-col min-h-screen p-5'>
      <HeaderComponent/>
      <Outlet/>
    </main>
  )
}

export default LayoutComponent
