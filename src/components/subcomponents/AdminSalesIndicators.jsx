import React from 'react'
import SalesPopularProduct from './SalesPopularProduct'
import SalesGraph from './SalesGraph'
import SalesBarGraph from './SalesBarGraph'
import SalesHistory from './SalesHistory'

const AdminSalesIndicators = () => {
  return (
    <div className='admin_sections-sales'>
      <div className='admin_first-section--sales'>
        <SalesPopularProduct />
        <SalesGraph />
      </div>
      <div className='admin_second-section--sales'>
        <SalesBarGraph />
        <SalesHistory />
      </div>
    </div>
  )
}

export default AdminSalesIndicators
