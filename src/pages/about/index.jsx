import React from 'react'
import Header from '../../component/header'
import HelmetHead from '../../component/helmetHead'

const About = () => {
  return (
    <div className='container w-ful bg-green-200 h-screen'>
      <HelmetHead
        title="About Page"
        description="Ini description about"
      />
      <Header/>
      <div className=''>
        <h3>Ini Hamalan About</h3>
      </div>
    </div>
  )
}

export default About