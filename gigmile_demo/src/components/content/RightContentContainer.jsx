import React from 'react'
import ActivityFeedContainer from './ActivityFeedContainer'

import { feeds } from "../../utils/activityFeed"
import GeographicalDistributionContainer from './GeographicalDistributionContainer'

const RightContentContainer = () => {
  return (
    <article className='min-h-full 2xl:flex-initial w-full 2xl:w-[350px] flex flex-col gap-[25px]'>
        <ActivityFeedContainer feeds={feeds} />
        <GeographicalDistributionContainer />
    </article>
  )
}

export default RightContentContainer