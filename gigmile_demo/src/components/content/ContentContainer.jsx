import React from 'react'
import LeftContentContainer from './LeftContentContainer'
import RightContentContainer from './RightContentContainer'

const ContentContainer = () => {
  return (
    <section className='flex flex-wrap min-h-screen xl:flex-nowrap mt-8 gap-[29px]'>
        <LeftContentContainer />

        <RightContentContainer />
    </section>
  )
}

export default ContentContainer