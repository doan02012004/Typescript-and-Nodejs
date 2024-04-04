import React from 'react'
import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <>
  
    <Header />
 <div className="container-fluid">
  <div className="row">
    <Sidebar />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Outlet />
    </main>
  </div>
</div>


    </>
  )
}

export default LayoutAdmin