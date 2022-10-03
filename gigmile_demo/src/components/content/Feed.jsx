import React from 'react'

const Feed = ( {id,icon,feed,timestamp} ) => {
  return (
    <button id={id} className="flex items-center py-1 sm:py-3 w-full">
        <div className='w-8 h-8'>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#FAFAFA] border-[0.5px] border-[#D9DADE]'>{icon}</div>
        </div>
        <div className="w-full ml-3 flex flex-col text-left">
            <p className='text-[#474F54]'>{feed}</p>
            <p className='text-[10px] text-[#A0AEC0] font-normal'>{timestamp}</p>
        </div>  
    </button>
  )
}

export default Feed