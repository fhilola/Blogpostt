import React from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminContainer = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminContainer