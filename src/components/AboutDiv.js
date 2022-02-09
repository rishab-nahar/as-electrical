import React from "react";
import { NavLink } from "react-router-dom";

let image =
  "https://previews.123rf.com/images/mihalec/mihalec1605/mihalec160500823/57971280-fil-isol%C3%A9-%C3%A0-d%C3%A9nuder-des-c%C3%A2bles-%C3%A9lectriques-sur-le-bleu-copie-de-fond-notion-d-espace-d-%C3%A9lectricit%C3%A9-.jpg";
const AboutDiv = () => {
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
              We have products from the most trusted brands and we promise to
              offer the finest customer service. We offer top quality products
              at reasonable prices, and back it all up with outstanding customer
              support.
            </p>
            <p className="topmargin_50">
              {" "}
              <NavLink to="/about" className="btn btn-outline-dark btn-lg">
                About us
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default AboutDiv;
