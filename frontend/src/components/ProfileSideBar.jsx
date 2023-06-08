import React, { useState } from 'react'
import { AiFillDashboard, AiFillMessage, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const ProfileSideBar = ({active,setActive}) => {
    const menus=[
        { name:"dahboard",number:1,icon: AiFillDashboard},
        { name:"User",number:2,icon: AiOutlineUser},
        { name:"Inbox",number:3,icon: AiFillMessage},
        { name:"Logout",number:4,icon: AiOutlineLogout},
    
    ]
    const [open,setOpen]=useState(true)
  return (
    <div className={`bg-[#16171F]  min-h-screen ${open? 'w-72' : 'w-16'} text-[#C4AA4F] px-4`}>
        <div className='py-3 flex justify-end'>
            <HiMenuAlt3 size={26} className='cursor-pointer' onClick={()=>setOpen(!open)}/>

        </div>
        <div className='mt-4 flex flex-col  gap-4 realtive '>
            {
                menus?.map((item,i)=>(

        <span
        onClick={()=>setActive(item.number)}
        key={i}
        className={`pl-3 ${
          active === item.number ? "text-[#f3efef]" : ""
        }  cursor-pointer flex item-center  text-sm gap-3.5 font-medium  p-2 hover:bg-gray-800 rounded-md `}
      >
          <div>{React.createElement(item?.icon,{size:"20"})}</div>

        <h2 className='text-gray-400'>{item?.name}</h2>
      </span>
                ))
            }


    

        </div>
      
    </div>
  )
}

export default ProfileSideBar
