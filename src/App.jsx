import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import AdminLogin from './components/AdminLogin'
import AdminDashBoard from './components/AdminDashBoard'
import AdminOrdersDashBoard from './components/AdminOrdersDashBoard'
import AdminClientsDashBoard from './components/AdminClientsDashBoard'
import AdminSalesDashBoard from './components/AdminSalesDashBoard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminDashBoard />} />
        <Route path='/admin-orders' element={<AdminOrdersDashBoard />}/>
        <Route path='/admin-clients' element={<AdminClientsDashBoard />} />
        <Route path='/admin-sales' element={<AdminSalesDashBoard />} />
      </Routes>
    </Router>
  )
}

export default App
