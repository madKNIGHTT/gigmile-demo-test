import React from 'react'
import IconsContainer from './IconsContainer'
import Search from './Search'
import UserDropdown from './UserDropdown'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center h-[63px]'>
        <div className='mx-auto sm:mr-auto sm:ml-0'>
            <h2>Hello Michael!👋🏽</h2>
        </div>

        <Search />
        <IconsContainer />
        <UserDropdown />
    </nav>
  )
}

export default Navbar