import React from 'react'
import { useNavigate } from 'react-router-dom'

const DropDown = ({categoriesData,setDropDown}) => {
    const navigate=useNavigate();
    const submitHandler = (i)=>{
        navigate(`/products?category=${i.title}`)
        setDropDown(false);
        window.location.reload();
    }
  return (
    <div className='dropDownCategory'>
        {
            categoriesData && categoriesData.map((i,index)=>(
                <div key={index} onClick={()=>submitHandler(i)}>

                    <img src={i.image_Url} alt="" style={{
                        width:"25px",
                        height:"25px",
                        objectFit:"contain",
                        marginLeft:"10px",
                        userSelect:"none"
                
                
                    }} />
                    <h4>{i.title}</h4>

                </div>
            ))
        }

    </div>
  )
}

export default DropDown