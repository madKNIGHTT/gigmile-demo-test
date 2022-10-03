import React from 'react'
import { distributions } from '../../utils/distribution'

import mapSVG from '../../utils/mapSVG'
import DistributionItem from './DistributionItem'

const GeographicalDistributionContainer = () => {
  return (
    <div className='app__content-feed border-[0.5px] border-[#E6E7E9] rounded'>
        <header className="border-b border-[#EEF0F7]/[0.45] p-1 sm:pl-[23px] py-1 sm:py-[21px] text-left">
            <div className='flex items-center ml-[2px] mr-6'>
                <h2 className='w-fit'>Geographical Distribution</h2>
            </div>
        </header>

        <div className='m-1 sm:ml-[23px] mr-6 mt-2 md:mt-[35px]'>
            {mapSVG}
        </div>

        <div className='m-1 sm:ml-[23px] mr-6 mt-2 md:mt-[35px]'>
            <header className='flex mb-[15px]'>
                <p  className='inline-block text-[#474F54]'>Countries</p>
                <p className='inline-block ml-auto text-[#1E1E1E]'>Captains</p>
            </header>

            <div className='flex flex-col gap-[14px] mb-[22px]'>
                {distributions.map( dist=> <DistributionItem key={dist.id} {...dist} /> )}
            </div>
        </div>
    </div>
  )
}

export default GeographicalDistributionContainer