import React from 'react'

import { stats } from '../../utils/statCards'
import StatCard from './StatCard'

const StatsContainer = () => {
  return (
    <div className='flex flex-wrap flex-initial lg:flex-nowrap justify-between gap-2 2xl:gap-8 w-full'>
        {stats.map( stat=> <StatCard key={stat.id} {...stat} /> )}
    </div>
  )
}

export default StatsContainer