import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi"

import { user } from '../../utils/user'

const UserDropdown = () => {
  return (
    <button className='flex flex-nowrap w-[60px] items-center ml-3'>
        <div className='w-10 h-10'>
            <img src={user.image} className='rounded-full w-full h-full object-cover' alt="user profile" />
        </div>

        <div className='ml-1'>
            <HiOutlineChevronDown className='' />
        </div>
    </button>
  )
}

export default UserDropdown