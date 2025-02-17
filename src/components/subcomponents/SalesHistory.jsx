import React from 'react'
import { useNavigate } from 'react-router'

const SalesHistory = () => {

    const navigate = useNavigate();

  return (
    <div className='sales_history'>
      <h2>Sales History</h2>
      <button onClick={() => navigate("/admin-sales-history")}>Sales</button>
    </div>
  )
}

export default SalesHistory
