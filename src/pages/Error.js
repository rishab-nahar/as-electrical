import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2 className="section_header">
        {" "}
        <span className="small">Welcome to</span>
        <span className="highlight">A</span>S Electricals
      </h2>
      <div className="ErrorDiv">
        <div>
          <h1 className="errormsgcolor m-5">
            Oops! Looks like You have mistyped the url
            <br />
            <br />
          </h1>

          <p className="topmargin_50 moveright">
            {" "}
            <NavLink to="/home" className="btn btn-outline-dark bigbtn m-5">
              HOME
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
