import React from 'react'

const Cart = () => {
    const cartData=[
        {
            name:"item1",
            description:"test",
            price:999
        },
        {
            name:"item1",
            description:"test",
            price:995
        },
        {
            name:"item1",
            description:"test",
            price:969
        },
    ]
  return (
    <div>
        {cartData.map((item,index)=>(
            <div key={index}>
                <h2>{item.name}</h2>
                <h2>{item.description}</h2>
                <h2>{item.price}</h2>
            </div>
        ))}
    </div>
  )
}

export default Cart