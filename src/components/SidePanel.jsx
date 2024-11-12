
import React from 'react'

import { IoIosHome } from "react-icons/io";

import { SiYoutubeshorts } from "react-icons/si";

import { MdSubscriptions } from "react-icons/md";
import SidePanelItem from './SidePanelItem';

import { FaHistory } from "react-icons/fa";

import { MdOutlinePlaylistAdd } from "react-icons/md";

import { MdOutlineVideoSettings } from "react-icons/md";

import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";



const SidePanel = () => {
  return (
    <div className='absolute pl-3 shadow-xl px-4 overflow-auto'>
        
    <ul className='flex flex-col gap-2 py-4 border-b border-solid border-white'>

     
     <SidePanelItem icon={<IoIosHome size={32} />} name='Home' />

     <SidePanelItem icon={<SiYoutubeshorts size={32} />} name='Shorts' />

     <SidePanelItem icon={<MdSubscriptions size={32} />} name='Subscriptions' />   

     </ul>


     <h2 className='my-2 uppercase font-extrabold'>You</h2>

     <ul className='flex flex-col gap-4 mt-4'>
     
     <SidePanelItem icon={<FaHistory size={32} />} name='History' />

     <SidePanelItem icon={<MdOutlinePlaylistAdd size={32} />} name='Playlists' />

     <SidePanelItem icon={<MdOutlineVideoSettings size={32} />} name='Your Videos' />
     
     <SidePanelItem icon={<MdOutlineWatchLater size={32} />} name='Watch Later' />

     <SidePanelItem icon={<AiFillLike size={32} />} name='Liked Videos' />
     
     </ul>

    
    </div>
  )
}

export default SidePanel
