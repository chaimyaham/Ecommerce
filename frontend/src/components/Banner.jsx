import React from 'react'
import { Link } from 'react-router-dom'
import Iphone from "../assets/images/iphone-14.jpg";
import holdingIphone from "../assets/images/iphone-hand.png"
import SoundSection from './SoundSection';
import DisplaySection from './DisplaySection';
import WebgiViewer from './WebgiViewer';
const Banner = () => {
  const handleLearnMore=()=>{
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top:element?.getBoundingClientRect().top,
      left:0,
      behavior:'smooth'
    })
  }
  return (
 <div>
     <div className='jumbotron-section wrapper'>
      <h2 className='title'>Best Deal </h2>
      <img className='logo' src={Iphone} alt="iPhone 14 Pro " />
      <p className='text'>Big and Bigger.</p>
      <span className='description'>
        From $41.62/mo for 24 mo. or $999 before trade-In

      </span>
      <ul className='links'>
        <li>
          <button className='button'><Link to="">Buy</Link>  </button>
        </li>
        <li>
          <Link className='link' to="" onClick={handleLearnMore}>Learn more </Link>
        </li>
      </ul>
      <img className='iphone-img' src={holdingIphone} alt="hand holding iphone"  />
    
    </div>
    <SoundSection/>
    <DisplaySection/>
    <WebgiViewer/>
 </div>

  )
}

export default Banner