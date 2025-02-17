import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminOrdersTable from './subcomponents/AdminOrdersTable'

const AdminOrdersDashBoard = () => {
  return (
    <div className='admin-dashboard_container'>
        <AdminNavBarAside />
        <AdminOrdersTable />
    </div>
  )
}

export default AdminOrdersDashBoard
