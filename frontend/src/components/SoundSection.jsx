import React from 'react'
import { Link } from 'react-router-dom'

const SoundSection = () => {
  return (
    <div className='sound-section wrapper'>
        <div className='body'>
            <div className='sound-section-content content'>
                <h2 className='title'>New Sound System</h2>
                <p className='text'>Feel the base</p>
                <span className='description'>From $41.62/mo for 24 mo. or $999 before trade-In</span>
                <ul className='links'>
                    <li>
                        <button className='button'>Buy</button>
                    </li>
                    <li>
                        <Link className='link' to="">Learn More </Link>
                    </li>
                </ul>
            </div>

        </div>
        </div>
  )
}

export default SoundSection