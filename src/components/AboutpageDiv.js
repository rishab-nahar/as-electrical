import React from "react";
import { NavLink } from "react-router-dom";

let image = "http://www.naharelectric.co.in/images/about_bg.jpg";
const AboutPageDiv = () => {
  return (
    <div
      className="fill"
      style={{
        display: "block",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        zIndex: "2",
        width: "100%",
        height: "90%",
        textAlign: "right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-sm-offset-12 text-center">
            <h2 className="section_header">
              {" "}
              <span className="small">Welcome to</span>
              <span className="highlight">A</span>S Electricals
            </h2>
            <p className="fs-5 about-text">
              The company was founded in th year 2012 by Mr. Nawkush Nahar.We
              are recognized for our service and quality of products. Customer
              satisfaction has always been our company's priority. We have
              successfully been a part of numerous projects in various sectors
              like like residential, Industrial, Helthcare, Hospitality etc.
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default AboutPageDiv;
