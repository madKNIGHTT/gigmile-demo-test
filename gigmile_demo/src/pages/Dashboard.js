import React from 'react'
import { ContentContainer, Navbar } from '../components'

const Dashboard = () => {
  return (
    <div className='bg-[#FAFAFA] max-w-7xl w-full min-h-screen'>
        <div className='bg-white w-full h-screen pt-[38px] pl-[16px] pr-[16px] sm:pl-[50px] sm:pr-[47px]'>
            <Navbar />

            <ContentContainer />
        </div>
    </div>
  )
}

export default Dashboard