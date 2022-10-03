import React from 'react'


const RepaymentsContainer = ( {upcomingRepayments} ) => {
  return (
    <div className='w-full border-[0.5px] border-[#D9DADE] rounded app__content-requests-container lg:mb-[131px]'>
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left">
                <caption className="border-b border-[#EEF0F7]/[0.45] p-1 sm:pl-[23px] py-1 sm:py-[21px] text-left">
                    <div className='flex items-center'>
                        <h2 className='w-fit'>Upcoming Repayments</h2>
                        <span className='flex items-center justify-center w-5 sm:w-[22px] h-5 sm:h-[22px] rounded-full bg-slate-400 ml-3 text-white text-center'>
                            <p className='text-[13px] font-medium'>{upcomingRepayments.data.length}</p>
                        </span>
                    </div>
                </caption>
                <thead>
                    <tr>
                        {upcomingRepayments.headers.map( (head,idx)=> <th key={idx}
                             scope="col" className="py-1 sm:py-3 px-2 sm:pl-4 sm:pr-4"
                        >
                            <h5>{head}</h5>
                        </th> )}
                    </tr>
                </thead>
                <tbody>
                    {upcomingRepayments.data.map( ({id,image,name,type,date,nextPayment})=> <tr key={id}>
                        {/* icon & name */}
                        <th scope="row" className="flex items-center py-1 sm:py-3 px-2 sm:pl-4 sm:pr-4 whitespace-nowrap">
                            {image 
                                ?   <img className="w-6 sm:w-8 h-6 sm:h-8 rounded-full object-cover" src={image} alt="user" />
                                : <div className='w-6 sm:w-8 h-6 sm:h-8 flex rounded-full bg-red-400 text-white font-normal items-center justify-center'>
                                    <p className='text-[13px] font-semibold'>{name.split(" ").slice(0,2).map( item=>item[0] )}</p>
                                </div>
                            }
                            <div className="pl-3">
                                <h3>{name}</h3>
                            </div>  
                        </th>
                        {/* service type */}
                        <td className="py-1 sm:py-3 px-2 sm:pl-4 sm:pr-4">
                            <p>{type}</p>
                        </td>
                        {/* next payment */}
                        <td className="py-1 sm:py-3 px-2 sm:pl-4 sm:pr-4 whitespace-nowrap">
                            <p>N {nextPayment}</p>
                        </td>
                        {/* due date */}
                        <td className="py-1 sm:py-3 px-2 sm:pl-4 sm:pr-4">
                            <h3>{date}</h3>
                        </td>
                    </tr> )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RepaymentsContainer