import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='h-12 w-full bg-sky-400 flex justify-around items-center' >
        <div className='text-center w-28 bg-slate-500 text-white p-1 rounded-md'><Link to ={'/'}>Home</Link></div>
        <div className='w-28 text-center bg-slate-500 text-white p-1 rounded-md'><Link to ={'/about'}>About</Link></div>
        <div className='flex justify-between items-center w-32'>
        <div className='bg-sky-600 text-white p-1 rounded-md'><Link to={'/login'}>LogIn</Link></div>
        <div className='bg-sky-600 text-white p-1 rounded-md'><Link to={'/signup'}>SignUp</Link></div>
        </div>
    </div>
    </>
  )
}

export default Header