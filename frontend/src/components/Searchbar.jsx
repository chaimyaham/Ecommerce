import React, { useState } from "react";
import { categoriesData, productData } from "../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { RxAvatar } from "react-icons/rx";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearch(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
    console.log(searchData);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search Product..."
        onChange={handleSearchChange}
        value={search}
      />
      <AiOutlineSearch />

      {searchData !== null && search !== "" ? (
        <div className="searchData">
          {searchData.map((i, index) => {
            const d = i.name;
            const Product_name = d.replace(/\s+/, "-");
            return (
              <Link key={index} to={`/product/${Product_name}`}>
                <div className="productSearchImg">
                  <img alt="productImg" src={i.image_Url[0].url} />
                  <h1>{i.name}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      ) : null}
      {/* categories */}
      <div className="categorySection">
        <div>
          {/* icon */}

          <button>All categories</button>
          <p onClick={() => setDropDown(!dropDown)}>"¨¨"</p>

          {dropDown ? (
            <DropDown
              categoriesData={categoriesData}
              setDropDown={setDropDown}
            />
          ) : null}
        </div>
      </div>

      {/* cart icons */}

      <div>
        <AiOutlineHeart />
        <span>0</span>
      </div>
      <div>
        <AiOutlineShoppingCart />
        <span>0</span>
      </div>
      <div>
        <Link to="/login">
          <RxAvatar style={{ fontSize: "50px" }} />
        </Link>
      </div>

      {/* button Section */}
      <div>
        <Link to="/seller">
          <h1>Become Seller</h1>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
