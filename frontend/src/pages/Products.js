import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { categoriesData, productData } from "../static/data";
import { BiCategory } from "react-icons/bi";

import styles from "../styles/styles";
import Loader from "../components/Loader";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { backend_url } from "../server";
import DropDown from "../components/DropDown";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
 

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });


  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts]);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <UserInfo />

       {/* search box */}
       <div className=" flex justify-between items-center p-10 ">
       <div className="w-[25%] relative ml-8">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#bf9b3c] border-[2px] rounded-md focus:border-[#169cc2]"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-3 top-1 cursor-pointer"
            />
            {searchData !== null && searchTerm !== "" ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2  p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={`${backend_url}${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1 className="capitalize ml-2">{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}



            
          </div>

          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] w-[270px] hidden 1000px:block">
              <BiCategory size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-gray-200 font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
       </div>
  
     

      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="flex flex-grow flex-wrap justify-center gap-5">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default Products;
