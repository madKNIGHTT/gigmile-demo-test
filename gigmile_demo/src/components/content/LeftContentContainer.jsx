import React from 'react'

import StatsContainer from './StatsContainer'
import AreaChartContainer from './AreaChartContainer'
import ServiceRequestsContainer from './ServiceRequestsContainer'
import RepaymentsContainer from './RepaymentsContainer'
import { upcomingRepayments } from "../../utils/upcomingRepayments"
import { serviceRequests } from '../../utils/serviceRequests'


const LeftContentContainer = () => {
  return (
    <article className='min-h-full flex flex-auto flex-col gap-[25px] w-full sm:w-[680px] 2xl:w-[721px]'>
        <StatsContainer />
        <AreaChartContainer />
        <ServiceRequestsContainer serviceRequests={serviceRequests} />
        <RepaymentsContainer upcomingRepayments={upcomingRepayments} />
    </article>
  )
}

export default LeftContentContainer