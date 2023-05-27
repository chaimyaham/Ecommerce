import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({data}) => {
    const [click,setClick]=useState(false)
    const [open,setOpen]=useState(false)
    const d=data.name;
    const product_name=d.replace(/\s+/g,'-');
  return (
    <div className='ProductCard'>
         <div></div>
         <Link to={`/product/${product_name}`}>
            <img src={data.image_Url[0].url} alt="" srcset="" />
         </Link>

    </div>
  )
}

export default ProductCard