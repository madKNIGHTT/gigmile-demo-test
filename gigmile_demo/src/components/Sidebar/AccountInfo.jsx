import React from 'react'

const AccountInfo = ( {image,name,position} ) => {
  return (
    <div className='flex h-[43px] w-fit ml-4 my-[13.5px]'>
        <div className='rounded-full w-[43px] h-[43px]'>
            <img className='rounded-full w-full h-full object-cover' src={image} alt="user" />
        </div>
        <div className='flex flex-col w-fit h-[43px] justify-center ml-3'>
            <h3>{name || "John Doe"}</h3>
            <h5>{position || "Administrator"}</h5>
        </div>
    </div>
  )
}

export default AccountInfo