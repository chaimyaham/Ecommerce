import React, { useState,useEffect, useRef } from 'react'

import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger , ScrollToPlugin)


const BestDeals = () => {


    const [data, setData] = useState([]);
    const { allProducts } = useSelector((state) => state.products);
    let box1=useRef(null)
    const slideInTop=(elt, delay, duree)=>{
      gsap.fromTo(elt,{
       
        opacity:0,
        y:-100
    
      },{
        opacity:1,
        y:0,
        duration:duree || 1,
        delay: delay || 0.4,
        scrollTrigger:{
          trigger:elt,
          start:"top center",
          end:"bottom center",
          scrub:true,
          
        }
      })
    
    }
    

 
    useEffect(() => {
      const allProductsData = allProducts ? [...allProducts] : [];
      const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
      const firstFive = sortedData && sortedData.slice(0,4);
      setData(firstFive);
      

    }, [allProducts]);
    useEffect(()=>{
      slideInTop(box1)
    },[])
    
  

  return (
    <div className='bestDealSection  mt-10'>
        <div className='text-center'>
        <h5 className='text-gray-500 ' > our products</h5>
        <h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12 whitespace-pre align-middle '>Best Selling Products</h1>
        </div>
        <div ref={(el)=>(box1=el)}    className="flex flex-grow flex-wrap justify-center gap-5">
           {
            data && data.length !== 0 &&( data && data.map((i, index) => <ProductCard  data={i} key={index} />))
           }
        </div>


    </div>
  )
}

export default BestDeals