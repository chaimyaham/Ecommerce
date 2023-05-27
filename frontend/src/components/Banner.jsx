import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
        <h1>
            Best Collection
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur consequatur excepturi suscipit praesentium perspiciatis nulla. Ad nobis nulla mollitia deserunt et, perferendis eveniet commodi, aspernatur autem blanditiis debitis vitae!
        </p>
        <button><Link to="/products">Shop now</Link></button>
    </div>
  )
}

export default Banner