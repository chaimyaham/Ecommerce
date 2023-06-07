import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";

import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";


const Home = () => {
 
  return (
   <>
    <div>
     
      {/* searchBox */}
      {/* <Searchbar/> */}
      
        <UserInfo/>
        <Banner/>
        {/* <Categories/>
        <BestDeals/> */}
        <Footer/>
      <h1>Home Page</h1>
    </div></>
  );
};

export default Home;
