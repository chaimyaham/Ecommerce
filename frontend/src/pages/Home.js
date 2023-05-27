import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Banner from "../components/Banner";


const Home = () => {
 
  return (
   <>
    <div>
      <Navbar />
      {/* searchBox */}
      <Searchbar/>
        <Banner/>
       Footer
      <h1>Home Page</h1>
    </div></>
  );
};

export default Home;
