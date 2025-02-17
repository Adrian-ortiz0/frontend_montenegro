import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminSalesTable from './subcomponents/AdminSalesTable'

const AdminSalesHistory = () => {
  return (
    <div className='admin-dashboard_container'>
      <AdminNavBarAside />
      <AdminSalesTable />
    </div>
  )
}

export default AdminSalesHistory
