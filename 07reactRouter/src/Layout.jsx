import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // we need to inport this for outlet

function Layout() {
  return (
    <>
      <Header />
      <Outlet />  
      <Footer />
    </>
  )
}

export default Layout
