import React from "react"
import {HiChartBar} from "react-icons/hi"
import { MdDeliveryDining } from "react-icons/md"
import { IoNotificationsSharp, IoBarChartSharp } from "react-icons/io5"
import { FcPhoneAndroid } from "react-icons/fc"
import { IoMdPeople } from "react-icons/io"


export const feeds= [
    { id:1, icon:<MdDeliveryDining className="text-[#FF6A4D]" />, feed:"Ola requested for Asset Financing", timestamp:"22 Dec 7:20 PM" },
    { id:2, icon:<IoNotificationsSharp className="text-[#DD425A]" />, feed:"Micheal missed a repayment scheduled for yesterday", timestamp:"22 Dec 7:20 PM" },
    { id:3, icon:<HiChartBar className="text-[#F9883A]" />, feed:"Michael upgraded from Tier 2 to Tier 3.", timestamp:"22 Dec 7:20 PM" },
    { id:4, icon:<FcPhoneAndroid />, feed:"Ola requested for Asset Financing.", timestamp:"22 Dec 7:20 PM" },
    { id:5, icon:<IoMdPeople className="text-[#444749]" />, feed:"Michael claimed  N10,000 Referral bonus.", timestamp:"22 Dec 7:20 PM" },
    { id:6, icon:<IoBarChartSharp className="text-[#F9883A]" />, feed:"Michael upgraded from Tier 1 to Tier 2.", timestamp:"22 Dec 7:20 PM" },
    { id:7, icon:<IoBarChartSharp className="text-[#F9883A]" />, feed:"Michael upgraded from Tier 1 to Tier 2.", timestamp:"22 Dec 7:20 PM" },
]