import React from 'react'
import Header from '../../component/header'
import HelmetHead from '../../component/helmetHead'


const Product = () => {
  return (
    <div className='container w-ful bg-green-200 h-screen'>
      <HelmetHead
        title="Product Page"
        description="Ini description product"
      />
      <Header/>
      <div className=''>
        <h3>Ini Hamalan Product</h3>
      </div>
    </div>
  )
}

export default Product