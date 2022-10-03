import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi"

const NavItem = ( {icon,text,submenu} ) => {
  return (
    <button type='button' className='flex flex-row h-10 mb-2 items-center text-[#474F54] rounded-lg hover:bg-[#ff735d] hover:text-white focus:bg-[#F95D44] focus:outline-none focus:text-white'>
        <div className='ml-3 mr-3 text-xl'>{icon}</div>
        <div className='w-28'><p className='text-left'>{text}</p></div>
        {submenu && <div className='flex-1'><div className='rounded-full bg-slate-100 ml-3 w-fit'><HiOutlineChevronDown className='h-5 w-5' /></div></div> }
    </button>
  )
}

export default NavItem