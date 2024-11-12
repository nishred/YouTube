import React from 'react'

const SidePanelItem = ({icon,name}) => {
  return (

    <li className='flex gap-4 items-center'>
    
    {icon}

    <span>{name}</span>

    </li>
  )
}

export default SidePanelItem
