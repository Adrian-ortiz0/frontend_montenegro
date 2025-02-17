import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminClientsTable from './subcomponents/AdminClientsTable'

const AdminClientsDashBoard = () => {
  return (
    <div className='admin-dashboard_container'>
        <AdminNavBarAside />
        <AdminClientsTable />
    </div>
  )
}

export default AdminClientsDashBoard
