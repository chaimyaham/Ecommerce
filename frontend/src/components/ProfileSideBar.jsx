import React from 'react'
import { AiFillDashboard, AiFillMessage, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const ProfileSideBar = ({active,setActive}) => {
    const menus=[
        { name:"dahboard",mumber:1,icon: AiFillDashboard},
        { name:"User",mumber:2,icon: AiOutlineUser},
        { name:"Inbox",mumber:3,icon: AiFillMessage},
        { name:"Logout",mumber:5,icon: AiOutlineLogout},
    
    ]
  return (
    <div className='bg-[#16171F]  min-h-screen w-72 text-[#C4AA4F] px-4'>
        <div className='py-3 flex justify-end'>
            <HiMenuAlt3 size={26} className='cursor-pointer  '/>

        </div>
        <div className='mt-4 flex flex-col  gap-4 realtive '>
            {
                menus?.map((item,i)=>(

        <span
        key={i}
        className={`pl-3 ${
          active === 8 ? "text-[red]" : ""
        } 800px:block hidden`}
      >
          <div>{React.createElement(item.icon,{size:"20"})}</div>

        <h2>{item.name}</h2>
      </span>
                ))
            }


    

        </div>
      
    </div>
  )
}

export default ProfileSideBar
