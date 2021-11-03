import React, { useEffect } from "react";
import "./Section4.css";
import { useState } from "react";
import adverst from "../../../images/adverst.jpg";
import blogsbanner from "../../../images/blogsbanner.jpeg";
import axios from "axios";

const Sidecard = () => {
  return (
    <div className="Section4__sideCard">
      <img
        className="Section4__CardImage"
        src="https://picsum.photos/180/180"
        alt=""
      />
      <div className="Section4__CardInnerPart">
        <p className="_title_">
          Top 10 Universities to Study Big Data Analytics in the UK
        </p>
        <p className="_description_">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiameu urna
          a elit pharetra molestie.
        </p>
        <p
          style={{
            color: "red",
            width: "160px",
            fontSize: "22px",
            textDecoration: "underline",
          }}
        >
          Know More{" "}
        </p>
      </div>
    </div>
  );
};

const Section4 = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    getBlog();
  })
  const getBlog = async() => {
    const blogApi = await axios.get("http://3.144.43.94:3001/api/blog");
    const blogData = blogApi.data;
    setBlog(blogData);
    console.log(blogData);
  }
  return (
    <div>
      <div>
        {/* <div className="Section4__InnerTop">
          <h2>Top Resources</h2>
        </div> */}
        <div className="Section4__Main">
          <div className="Section4__InnerTop">
            <h2 className="_section4Heading_">Top Resources</h2>
          </div>
          <div className="_wrapper4inner_">
            <div className="_section4Wrap_">
              <div className="Section4__Inner">

              {blog.map(data => (
                <div className="Section4__sideCard">
                <img
                  className="Section4__CardImage"
                  src={data.blog_image}
                  alt=""
                />
                <div className="Section4__CardInnerPart">
                  <p className="_title_">
                    {data.blog}
                  </p>
                  <p className="_description_">
                    {data.blog_desciption}
                  </p>
                  <p
                    style={{
                      color: "red",
                      width: "160px",
                      fontSize: "22px",
                      textDecoration: "underline",
                    }}
                  >
                    Know More{" "}
                  </p>
                </div>
                </div>
              ))}
                

               
                {/* <Sidecard />
              <Sidecard />
              <Sidecard />
              <Sidecard /> */}
              </div>
              <div className="Section4__Ad">
                <img className="Section4__Image" src={adverst} alt="ad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
