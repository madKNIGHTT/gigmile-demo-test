import React from 'react'

import AreaChartComponent from './AreaChart'
import { data } from '../../utils/areaChartData'

const AreaChartContainer = () => {
  return (
    <div className='w-full border-[0.5px] border-[#D9DADE] rounded'>
        <header className="border-b border-[#EEF0F7]/[0.45] p-1 sm:pl-[23px] py-1 sm:py-[21px] text-left">
            <div className='flex items-center ml-[2px] mr-6'>
                <h2 className='w-fit'>Service Requests</h2>

                
                <button className="ml-auto bg-[#FAFAFA] rounded-[7px] py-2 px-1 text-center inline-flex items-center" type="button">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_1261)">
                        <path d="M12.5 1.875H11.875V1.25C11.875 0.90625 11.5938 0.625 11.25 0.625C10.9062 0.625 10.625 0.90625 10.625 1.25V1.875H4.375V1.25C4.375 0.90625 4.09375 0.625 3.75 0.625C3.40625 0.625 3.125 0.90625 3.125 1.25V1.875H2.5C1.8125 1.875 1.25 2.4375 1.25 3.125V13.125C1.25 13.8125 1.8125 14.375 2.5 14.375H12.5C13.1875 14.375 13.75 13.8125 13.75 13.125V3.125C13.75 2.4375 13.1875 1.875 12.5 1.875ZM11.875 13.125H3.125C2.78125 13.125 2.5 12.8438 2.5 12.5V5H12.5V12.5C12.5 12.8438 12.2188 13.125 11.875 13.125Z" fill="#1E1E1E"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_201_1261">
                        <rect width="15" height="15" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p className='ml-[5px] mr-3 text-[12px]'>This year</p>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_1267)">
                        <path d="M13.4584 7.91667L9.50004 11.875L5.54171 7.91667L13.4584 7.91667Z" fill="#A3AED0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_201_1267">
                        <rect width="19" height="19" fill="white" transform="translate(19 19) rotate(-180)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>

            </div>
        </header>

        <AreaChartComponent data={data} />
    </div>
  )
}

export default AreaChartContainer