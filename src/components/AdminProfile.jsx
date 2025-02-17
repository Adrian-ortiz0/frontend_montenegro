import React from 'react'
import AdminNavBarAside from './subcomponents/AdminNavBarAside'
import AdminProfileInfo from './subcomponents/AdminProfileInfo'

const AdminProfile = () => {
  return (
    <div className='admin-dashboard_container'>
        <AdminNavBarAside />
        <AdminProfileInfo />
    </div>
  )
}

export default AdminProfile
