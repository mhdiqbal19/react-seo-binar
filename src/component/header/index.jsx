import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center w-full gap-6 py-10 bg-red-600 text-2xl font-bold text-white'>
        <Link to={"/"}>
        <h3>HOME</h3>
        </Link>
        <Link to={"/about"}>
        <h3>ABOUT</h3>
        </Link>
        <Link to={"/product"}>
        <h3>PRODUCT</h3>
        </Link>
    </div>
  )
}

export default Header