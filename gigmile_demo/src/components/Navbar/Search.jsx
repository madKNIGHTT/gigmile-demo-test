import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='mr-[15px] '>
        <div>
            <form onSubmit={e=>e.preventDefault()} className='flex items-center rounded-lg bg-[#FAFAFA] h-10'>
                <div className='flex items-center content-start w-20 text-sm sm:w-44 md:w-32 lg:w-[400px] ml-4 text-[#474F54]/40'>
                    <label htmlFor="search h-5">
                        <FiSearch className='w-5 h-5' />
                    </label>
                    <input type="text" name="search" id="search" placeholder='Search'
                        className='app__navbar-search placeholder:text-[#474F54]/40 w-10 sm:w-24 md:w-20 lg:w-52 h-[19px] sm:m-3 bg-[#FAFAFA] focus:outline-none'
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Search