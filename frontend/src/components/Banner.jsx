import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/styles';



const Banner = () => {

  
    return (
      <div
        className={`Banner relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      
      >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#f4f0f0] font-[600] capitalize`}
          >
            Become a seller <br /> And gain 
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffff]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/shop-create" className="inline-block">
              <div className={`${styles.button} mt-5  hover:bg-[#1682AE] hover:text-white duration-300 cursor-pointer`}>
                   <span className="text-[#131313] font-[Poppins] text-[18px]">
                      Become a seller 
                   </span>
              </div>
          </Link>
          <Link to="/shop-create" className="inline-block">
              <div className={`${styles.button} mt-5 ml-3 hover:bg-black text-[#131313] hover:text-white duration-300 cursor-pointer`}>
                   <span className=" text-[18px]">
                      Discover our products
                   </span>
              </div>
          </Link>
        </div>
      </div>
    );

  
}

export default Banner