import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminProductsGrid from './subcomponents/AdminProductsGrid'

const AdminDashBoard = () => {
  return (
    <div className='admin-dashboard_container'>
        <AdminNavBarAside />
        <AdminProductsGrid />
    </div>
  )
}

export default AdminDashBoard
