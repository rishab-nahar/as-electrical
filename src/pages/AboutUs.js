import React from "react";
import AboutPageDiv from "./../components/AboutpageDiv";
import logo from "./../images/download.svg";

const AboutUs = () => {
  return (
    <>
      <AboutPageDiv></AboutPageDiv>
      <div className="aboutdiv fs-5 ">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <h2 className="section_header ps-4">
              {" "}
              <span className="small">About us</span>
              <span className="highlight">A</span>S ELECTRICALS
            </h2>
            <p className="fontsize_20 ps-4">
              {" "}
              <strong>AS ELECTRICALS</strong>Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Magnam, quod eaque ad quia
              consectetur molestias fuga unde, in quas vitae recusandae dolorem
              facilis omnis ea sed! Deleniti incidunt aliquid porro ducimus
              eligendi eveniet quidem velit, modi enim architecto hic earum
              maxime fugiat asperiores eius! Ducimus ipsa asperiores
              repellendus. Vitae, quasi.
            </p>
          </div>
          <div className="col-md-6 col-lg-offset-1 ps-4">
            <h2 className="section_header">
              {" "}
              <span className="small">COMPANY GOALS: </span>
            </h2>
            <div className="teaser media">
              <div className="media-left">
                <div className="teaser_icon size_small highlight">
                  {" "}
                  <i className="fa fa-users"></i>{" "}
                </div>
              </div>
              <div className="media-body">
                <h4 className="highlight text-uppercase"> leader </h4>
                <p>
                  To be a leader in the industry by providing excellent services
                  and improving relationship with our customers.
                </p>
              </div>
            </div>
            <div className="teaser media">
              <div className="media-left">
                <div className="teaser_icon size_small highlight2">
                  {" "}
                  <i className="fa fa-suitcase"></i>{" "}
                </div>
              </div>
              <div className="media-body">
                <h4 className="highlight2 text-uppercase">
                  {" "}
                  quality services{" "}
                </h4>
                <p>
                  {" "}
                  To provide quality services exceeding all the expectations of
                  our esteemed customers.
                </p>
              </div>
            </div>
            <div className="teaser media">
              <div className="media-left">
                <div className="teaser_icon size_small highlight3">
                  {" "}
                  <i className="fa fa-star"></i>{" "}
                </div>
              </div>
              <div className="media-body">
                <h4 className="highlight3 text-uppercase">
                  {" "}
                  long term relationships{" "}
                </h4>
                <p>
                  {" "}
                  To build long term relationships with our customers and
                  clients by providing remarkable services and products.{" "}
                </p>
              </div>
            </div>
            <div className="teaser media">
              <div className="media-left">
                <div className="teaser_icon size_small highlight5">
                  {" "}
                  <i className="fa fa-balance-scale"></i>{" "}
                </div>
              </div>
              <div className="media-body">
                <h4 className="highlight5 text-uppercase"> values </h4>
                <p>
                  {" "}
                  We believe in treating our customers with respect and faith,
                  while providing them remarkable services
                </p>
              </div>
            </div>
            <div className="teaser media">
              <div className="media-left">
                <div className="teaser_icon size_small highlight6">
                  {" "}
                  <i className="fa fa-flag"></i>{" "}
                </div>
              </div>
              <div className="media-body">
                <h4 className="highlight6 text-uppercase"> ethics </h4>
                <p>
                  {" "}
                  We believe in honesty and integrate all the business ethics
                  into our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
