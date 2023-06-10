import React, { useState,useEffect } from 'react'

import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';

const BestDeals = () => {
    const [data, setData] = useState([]);
    const { allProducts } = useSelector((state) => state.products);
    useEffect(() => {
      const allProductsData = allProducts ? [...allProducts] : [];
      const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
      const firstFive = sortedData && sortedData.slice(0, 5);
      setData(firstFive);
    }, [allProducts]);
    
  

  return (
    <div className='bestDealSection  mt-10'>
        <div className='text-center'>
        <h5 className='text-gray-500 '> our products</h5>
        <h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12 whitespace-pre align-middle '>Best Selling Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0 grid-flow-col ">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>


    </div>
  )
}

export default BestDeals