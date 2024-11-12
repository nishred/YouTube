import React from 'react'

import { IoIosHome } from "react-icons/io";

import { SiYoutubeshorts } from "react-icons/si";

import { MdSubscriptions } from "react-icons/md";

import { FaRegUserCircle } from "react-icons/fa";
import SidePanel from './SidePanel';

const activeClass = "gap-8 items-center"

const passiveClass = "flex-col items-center"


const SideBar = ({active}) => {


   const [state,setState] = React.useState(true)
   
   
   if(active)
    return <SidePanel />


  return (
    <div className='flex flex-col gap-8 p-2'>
      
        <div className={`flex ${active?(activeClass):(passiveClass)}`}> 
        <IoIosHome size={32}/>
        <span className='text-xs'>Home</span>
        </div>
 
        
        <div className={`flex ${active?(activeClass):(passiveClass)}`}>
        <SiYoutubeshorts size={32} /> 
        <span className='text-xs'>Shorts</span>
        </div>


         <div className={`flex ${active?(activeClass):(passiveClass)}`}>
        <MdSubscriptions size={32} />
        <span className='text-xs'>Subscriptions</span>
        </div>


        <div className={`flex ${active?(activeClass):(passiveClass)}`}>
        <FaRegUserCircle size={32}/>
        <span className='text-xs'>You</span>
        </div>
 
    </div>
  )
}

export default SideBar
