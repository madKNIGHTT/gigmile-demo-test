import React from 'react'
import { MdOutlineLogout } from "react-icons/md"

const Logout = () => {
  return (
    <button type='button' className='absolute bottom-0 h-14 w-full flex flex-row text-[#474F54]'>
       <div className='self-center text-xl ml-8'><MdOutlineLogout /></div>
       <div className='w-full self-center ml-3 text-left'><p className='w-28'>Log Out</p></div>
    </button>
  )
}

export default Logout