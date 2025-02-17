import React from 'react'
import SalesPopularProduct from './SalesPopularProduct'
import SalesGraph from './SalesGraph'

const AdminSalesIndicators = () => {
  return (
    <div className='admin_sections-sales'>
      <div className='admin_first-section--sales'>
        <SalesPopularProduct />
        <SalesGraph />
      </div>
      <div className='admin_second-section--sales'>
      </div>
    </div>
  )
}

export default AdminSalesIndicators
