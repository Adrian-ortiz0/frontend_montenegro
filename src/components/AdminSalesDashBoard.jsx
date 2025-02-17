import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminSalesIndicators from './subcomponents/AdminSalesIndicators'

const AdminSalesDashBoard = () => {
  return (
    <div className='admin-dashboard_container'>
        <AdminNavBarAside />
        <AdminSalesIndicators />
    </div>
  )
}

export default AdminSalesDashBoard
