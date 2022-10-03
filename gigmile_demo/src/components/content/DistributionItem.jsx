import React from 'react'
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5"
import Flag from 'react-flagkit';


const DistributionItem = ( {id,colors,name,country,value,increase,decrease} ) => {
  return (
    <div id={id} className='flex items-center'>
        <div className='flex mr-auto items-center'>
            { colors==="#F9883A" && <div className={`w-5 h-5 rounded-full bg-[#F9883A]/30 flex items-center justify-center`}>
                <div className='w-[11.4px] h-3 rounded-full bg-[#F9883A]' />
            </div>}
            { colors==="#3285FF" && <div className={`w-5 h-5 rounded-full bg-[#3285FF]/30 flex items-center justify-center`}>
                <div className='w-[11.4px] h-3 rounded-full bg-[#3285FF]' />
            </div>}
            { colors==="#1DB385" && <div className={`w-5 h-5 rounded-full bg-[#1DB385]/30 flex items-center justify-center`}>
                <div className='w-[11.4px] h-3 rounded-full bg-[#1DB385]' />
            </div>}

            <p className='ml-3 flex text-[#1E1E1E]'>{name} <Flag className='ml-2' country={country} /></p>
        </div>

        <div className='flex items-center'>
            <p className='mr-[7px] text-[14px] font-semibold text-[#000000]'>{value}</p>
            {increase ? <p className={`text-[#1DB385] inline-flex items-center`}><IoCaretUpSharp className='mr-1' /> {increase}</p>
                : <p className={`text-[#E25C5C] inline-flex items-center`}><IoCaretDownSharp className='mr-1' /> {decrease}</p>
            }
        </div>
    </div>
  )
}

export default DistributionItem