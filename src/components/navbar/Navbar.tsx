import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center bg-gray-600 p-2'>
        <h1 className='flex-1/3 text-xl font-semibold text-white'><Link rel="stylesheet" to='/'>Manage Users</Link></h1>
        <NavLink className='px-5 py-2  cursor-pointer rounded-2xl bg-gray-800 font-bold text-md text-white' to="/">Dashboard</NavLink>
        <NavLink className='px-5 mx-2  py-2  cursor-pointer rounded-2xl bg-green-600 font-bold text-md text-white' to="/add-user">Add</NavLink>
    </div>
    </>
  )
}

export default Navbar