import React from "react";
import { IoHomeOutline } from "react-icons/io5"
import { HiOutlineUserGroup, HiOutlineDocument, HiOutlineBriefcase, HiOutlineChartPie } from "react-icons/hi"
import { AiOutlineSetting } from "react-icons/ai"
import { CgFileDocument } from "react-icons/cg"

export const navlinks= [
    {icon:<IoHomeOutline />, text:"Dashboard"},
    {icon:<HiOutlineUserGroup />, text:"Captains"},
    {icon:<HiOutlineDocument />, text:"Service Requests", submenu:true},
    {icon:<HiOutlineBriefcase />, text:"Service Partners"},
    {icon:<HiOutlineChartPie />, text:"Asset Metrics"},
    {icon:<CgFileDocument />, text:"Repayments"},
    {icon:<AiOutlineSetting />, text:"Settings"},
];