import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import AdminLogin from './components/AdminLogin'
import AdminDashBoard from './components/AdminDashBoard'
import AdminOrdersDashBoard from './components/AdminOrdersDashBoard'
import AdminClientsDashBoard from './components/AdminClientsDashBoard'
import AdminSalesDashBoard from './components/AdminSalesDashBoard'
import AdminSalesHistory from './components/AdminSalesHistory'
import AdminProfile from './components/AdminProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminDashBoard />} />
        <Route path='/admin-orders' element={<AdminOrdersDashBoard />}/>
        <Route path='/admin-clients' element={<AdminClientsDashBoard />} />
        <Route path='/admin-sales' element={<AdminSalesDashBoard />} />
        <Route path='/admin-sales-history' element={<AdminSalesHistory />} />
        <Route path='/admin-profile' element={<AdminProfile />} />
      </Routes>
    </Router>
  )
}

export default App
