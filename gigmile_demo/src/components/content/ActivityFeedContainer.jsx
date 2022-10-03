import React from 'react'
import Feed from './Feed'

const ActivityFeedContainer = ( {feeds} ) => {
  return (
    <div className='app__content-feed border-[0.5px] border-[#E6E7E9] rounded'>
        <header className="border-b border-[#EEF0F7]/[0.45] p-1 sm:pl-[23px] py-1 sm:py-[21px] text-left">
            <div className='flex items-center ml-[2px] mr-6'>
                <h2 className='w-fit text-[#1E1E1E]'>Activity Feed</h2>
                <span className='flex items-center justify-center w-5 sm:w-[22px] h-5 sm:h-[22px] rounded-full bg-[#E25C5C] ml-3 text-white text-center'>
                    <p className='text-[13px] font-medium'>{feeds?.length || 0}</p>
                </span>

                <p className='text-[#1DB385] ml-auto cursor-pointer'>View all</p>
            </div>
        </header>

        <div className='m-1 sm:ml-[23px] mr-6'>
            {feeds.map( feed=> <Feed key={feed.id} {...feed} /> )}
        </div>
    </div>
  )
}

export default ActivityFeedContainer