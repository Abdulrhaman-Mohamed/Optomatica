import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="  md:absolute top-0 md:top-[5%] w-full md:w-4/5 m-auto h-10 rounded z-10">
    <div className="navbar bg-black rounded">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center w-full">
          <li>
            <Link to={"/"} className='  font-bold'>Home</Link>
          </li>
          <li>
          <Link to={"/"} className='  font-bold'>Home</Link>
          </li>
        </ul>

    </div>
  </div>
  )
}
