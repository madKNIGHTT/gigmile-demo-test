import React from 'react'

const StatCard = ( {id,icon,amount,label} ) => {
  return (
    <div className='focus-within:border-[#1DB385] focus-within:outline-none focus-within:ring-0 border border-[##E6E7E9] hover:border-[#1DB385]/70 w-[156px] h-16 sm:h-[140px] rounded app__content-stats-item flex flex-auto md:flex-none items-center justify-center'>
        <button type='button' className='group focus:outline-none focus:ring-0 h-full text-center flex flex-auto items-center justify-center sm:flex-col'>
            <div className='w-full h-5 basis-1/3 sm:w-[44px] sm:h-[44px] mx-auto'>
                {/* <FaClipboardCheck className='text-[#474F54]/30 group-hover:text-[#1DB385] w-full h-full' /> */}
                {React.createElement(icon,{ id, className:'text-[#474F54]/30 group-hover:text-[#1DB385] group-focus:text-[#1DB385] w-full h-full object-cover' })}
            </div>

            <div className='flex flex-col items-center sm:ml-0 w-full'>
                <h1 className='text-xs sm:text-xl font-semibold'>{amount}</h1>
                <h5 className='text-xs sm:text-sm'>{label}</h5>
            </div>
        </button>
    </div>
  )
}

export default StatCard