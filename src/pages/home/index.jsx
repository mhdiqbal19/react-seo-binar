import React from 'react'
import Header from '../../component/header'
import HelmetHead from '../../component/helmetHead'

const Home = () => {
  return (
    <div className='container w-ful bg-green-200 h-screen'>
      <HelmetHead
        title="Home Page"
        description="Ini description home"
      />
      <Header/>
      <div className=''>
        <h3>Ini Hamalan Home</h3>
      </div>
    </div>
  )
}

export default Home