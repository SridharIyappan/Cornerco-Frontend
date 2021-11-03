import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";

import BackGround from "../../../images/Health-Wealth/web-bg.png";

import "./Section2.css";


// export const Card = () => {
  
//     return (
//       <>
        
//       </>
//     )
// } 

const Section2 = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    productData();
  })
    const productData = async() => {
      const productApi = await axios.get(
        "http://3.144.43.94:3001/api/products"
      );
      const productData = productApi.data;
      setProduct(productData);
    }
    return (
      <div className="Section2__MainPart">
        <div className="Section2__Main">
          <div className="_section2headingWrap_">
            {/* <div className="Section2__Heading">
         
          <h3>
            <b>Feature Products</b>
          </h3>
          <p className='_more_'>See More Products </p>
          </div> */}
          </div>
          <div className="_section2inner_">
            <div className="Section2__Cards">
              <div className="Section2__Heading">
                <p className="_section2Heading_">Feature Products</p>
                <Link to="/" className="_mblMore_">
                  See All{" "}
                </Link>
                <Link to="/" className="_more_">
                  See All Products
                </Link>
              </div>

              <div className="_sec2Cards_">
                {product
                  .reverse()
                  .slice(0, 6)
                  .map((data) => (
                    <div className={"Section2__CardMain"}>
                      <img
                        className="Section2__CardImage"
                        src={`http://3.144.43.94:3001/` + data.avatar}
                        alt=""
                      />
                      <div className="_priceSection_">
                        <p className="Section2__CardTitle pName">
                          {data.productName}
                        </p>
                        <p className="Section2__Price">
                          <span className="price-pad">${data.mrp}</span>
                          <span>${data.salePrice}</span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="Section2__ADpart">
              <div className="_ADpartInner_">
                <img src="assets/home/ad1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section2;
