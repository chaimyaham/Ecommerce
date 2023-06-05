import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";


const Home = () => {
 
  return (
   <>
    <div>
     
      {/* searchBox */}
      {/* <Searchbar/> */}
        <Banner/>
        <Categories/>
        <BestDeals/>
       Footer
      <h1>Home Page</h1>
    </div></>
  );
};

export default Home;
