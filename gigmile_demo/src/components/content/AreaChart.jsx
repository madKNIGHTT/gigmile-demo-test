import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AreaChartComponent = ( {data} ) => {
    const getIntroOfPage = (label) => {
        if (label === 'Jan') return "January";
        if (label === 'Feb') return "February";
        if (label === 'Mar') return "March";
        if (label === 'Apr') return 'April';
        if (label === 'May') return label;
        if (label === 'Jun') return 'June';
        if (label === 'Jul') return 'July';
        if (label === 'Aug') return 'August';
        if (label === 'Sep') return 'September';
        if (label === 'Oct') return 'October';
        if (label === 'Nov') return 'November';
        if (label === 'Dec') return 'December';

        return '';
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
            <div className="custom-tooltip app__requests-tooltip w-[140px] flex gap-[11px] py-[18px] px-3 bg-white rounded-xl">
                {/* <div className='rounded-[40px] flex items-center justify-center'> */}
                    <svg width="34" height="62" viewBox="0 0 34 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="34" height="61.1795" rx="17" fill="#FAFAFA"/>
                        <g clipPath="url(#clip0_201_1274)">
                        <path d="M15.8281 20.5898C14.8588 20.5898 14.0703 21.3783 14.0703 22.3476V22.9726L15.2422 23.5585H15.8281H16.4141L17.5859 22.9726V22.3476C17.5859 21.3783 16.7974 20.5898 15.8281 20.5898Z" fill="#FF6A4D"/>
                        <path d="M17.5859 22.9726V22.3476C17.5859 21.3783 16.7974 20.5898 15.8281 20.5898V23.5585H16.4141L17.5859 22.9726Z" fill="#E64D2E"/>
                        <path d="M7 38.246C7.27152 39.5832 8.51234 40.5898 9.92969 40.5898C11.347 40.5898 12.6269 39.5832 12.8984 38.246L11.6255 37.6601H7.81344L7 38.246Z" fill="#474F54"/>
                        <path d="M9.92969 39.4179C8.96039 39.4179 8.17188 38.6294 8.17188 37.6601C8.17188 36.6908 8.96039 35.9023 9.92969 35.9023C10.899 35.9023 11.7266 36.6908 11.7266 37.6601C11.7266 38.6294 10.899 39.4179 9.92969 39.4179Z" fill="#F2F9FF"/>
                        <path d="M12.8984 27.6992H9.34375L8.17188 28.871V32.3867L9.34375 32.9726H12.8984L14.6562 32.3867V29.2226L14.0703 28.871L12.8984 27.6992Z" fill="#FF9100"/>
                        <path d="M8.17188 26.5273V28.871H14.0703L14.6562 28.5677L14.0703 28.2851V26.5273H8.17188Z" fill="#FABE2C"/>
                        <path d="M16.4141 38.246H7V37.6601C7 35.3949 8.87539 33.5585 11.1406 33.5585L12.1172 32.9726H17.5859V37.2695L16.4141 38.246Z" fill="#FF6A4D"/>
                        <path d="M7 32.3867H15.2422V33.5585H7V32.3867Z" fill="#32393F"/>
                        <path d="M19.3438 35.3515V37.5546L18.7578 38.246H16.4141V33.5585H15.2422C14.5977 33.5585 14.0703 33.0312 14.0703 32.3867V29.457H17.5859V31.2148C18.2305 31.2148 18.7578 31.7421 18.7578 32.3867V34.7304L19.3438 35.3515Z" fill="#575F64"/>
                        <path d="M19.3438 35.3515V37.5546L18.7578 38.246H16.4141V33.5585H15.8281V29.457H17.5859V31.2148C18.2305 31.2148 18.7578 31.7421 18.7578 32.3867V34.7304L19.3438 35.3515Z" fill="#474F54"/>
                        <path d="M17.5859 28.871V28.2851C17.5859 27.3158 16.7974 26.5273 15.8281 26.5273C14.8588 26.5273 14.0703 27.3158 14.0703 28.2851V29.457C14.0703 30.4278 14.8573 31.2148 15.8281 31.2148H20.5547C21.5255 31.2148 22.3125 30.4278 22.3125 29.457V28.871H17.5859Z" fill="#FF6A4D"/>
                        <path d="M22.3125 29.457V28.871H17.5859V28.2851C17.5859 27.3158 16.7974 26.5273 15.8281 26.5273V31.2148H20.5547C21.5255 31.2148 22.3125 30.4278 22.3125 29.457Z" fill="#E64D2E"/>
                        <path d="M16.4141 23.5585H15.8281H15.2422L14.0703 24.1445V24.7304C14.0703 25.6997 14.8588 26.5273 15.8281 26.5273C16.7974 26.5273 17.5859 25.6997 17.5859 24.7304V24.1445L16.4141 23.5585Z" fill="#FFE1BA"/>
                        <path d="M17.5859 24.7304V24.1445L16.4141 23.5585H15.8281V26.5273C16.7974 26.5273 17.5859 25.6997 17.5859 24.7304Z" fill="#FFBFAB"/>
                        <path d="M15.8281 22.9726H14.0703V24.1445H15.8281H18.7578V22.9726H15.8281Z" fill="#474F54"/>
                        <path d="M15.8281 22.9726H18.7578V24.1445H15.8281V22.9726Z" fill="#32393F"/>
                        <path d="M23.9273 32.5177C23.8626 32.0616 23.7344 31.1633 23.4787 29.374L21.1406 28.2851V32.9726C21.1406 33.8969 20.3443 34.7304 19.3438 34.7304H18.7578V38.246H19.9297H25.8281L27 37.6601V36.4882C27 34.6137 25.7068 32.9795 23.9273 32.5177V32.5177Z" fill="#E64D2E"/>
                        <path d="M24.6562 30.0429H22.8984C21.9291 30.0429 21.1406 29.2544 21.1406 28.2851C21.1406 27.3158 21.9291 26.5273 22.8984 26.5273H24.6562V30.0429Z" fill="#FF6A4D"/>
                        <path d="M24.2464 34.7482L24.076 35.3993L23.0857 34.9129C21.9557 35.3196 21.1406 36.3917 21.1406 37.6601C21.1406 39.2755 22.455 40.5898 24.0703 40.5898C25.6857 40.5898 27 39.2755 27 37.6601C27 36.1051 25.7784 34.8414 24.2464 34.7482V34.7482Z" fill="#32393F"/>
                        <path d="M24.0703 35.9023C23.101 35.9023 22.3125 36.6908 22.3125 37.6601C22.3125 38.6294 23.101 39.4179 24.0703 39.4179C25.0396 39.4179 25.8281 38.6294 25.8281 37.6601C25.8281 36.6908 25.0396 35.9023 24.0703 35.9023Z" fill="#DFE7F4"/>
                        <path d="M24.6506 37.5771L24.2465 34.7482C24.187 34.7446 24.1307 34.7304 24.0703 34.7304C23.7234 34.7304 23.3949 34.8017 23.0858 34.9129L23.4902 37.7431L24.6506 37.5771Z" fill="#C7CFE1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_201_1274">
                        <rect width="20" height="20" fill="white" transform="translate(7 20.5898)"/>
                        </clipPath>
                        </defs>
                    </svg>

                {/* </div> */}
                <div className='flex flex-col'>
                    <p className="desc font-poppins font-normal text-[8px]">This month</p>
                    <h1 className="label font-poppind font-bold text-[22px]">{`${payload[0].value}`}</h1>
                    <p className="intro">{getIntroOfPage(label)}</p>
                </div>
            </div>
            );
        }

        return null;
    };


  return (
    <ResponsiveContainer width="99%" height={296.5} className='mb-[29px]'>
        <AreaChart
            className='w-full h-full'
            //   width={500}
            //   height={300}
            
            data={data}
            margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
            }}
        >
            <defs>
                <linearGradient id="colorAssetFinancing" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#F9883A" stopOpacity={0.13}/>
                <stop offset="90%" stopColor="#F9883A" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorWorkingCapital" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stopColor="#3285FF" stopOpacity={0.14}/>
                <stop offset="80%" stopColor="#3285FF" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="6 3" vertical={false} opacity={0.5} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:'#A0AEC0', fontSize:10, fontWeight:500, }} tickMargin={14.5} />
            <YAxis axisLine={false} tickLine={false} tickCount={6} tick={{fill:'#A0AEC0', fontSize:10, fontWeight:500,}} />
            <Tooltip content={<CustomTooltip /> } />
            <Legend verticalAlign='top' iconType="plainline" iconSize={30} contentStyleType formatter={ (value)=> <span className='text-[#A0AEC0] text-[12px] font-normal'>{value}</span> } />
            <Area type="natural" activeDot={{ strokeWidth: 5, r: 8 }} dataKey="Asset Financing" stackId="1" stroke="#F9883A" fill="url(#colorAssetFinancing)" className='text-[#F9883A]/[13]' />
            <Area type="natural" activeDot={false} dataKey="Working Capital" stackId="2" stroke="#3285FF" fill="url(#colorWorkingCapital)" />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent