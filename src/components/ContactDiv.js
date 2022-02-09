import React from "react";
import { Address, phone_number, landline_number, email } from "./../Details";
import { NavLink } from "react-router-dom";
import logo from "./../images/download.svg";

const ContactDiv = () => {
  return (
    <div className="footer fs-5">
      <div className="row">
        <div className="col-md-3 col-sm-6 text-center-footer text-sm-left">
          <NavLink to="/">
            <img src={logo} alt="AS Electrical" className="logo" />
          </NavLink>
          <table className="widget">
            <tbody>
              <tr>
                <td>Address: </td>
                <td className="ps-2">{Address}</td>
              </tr>
              <br />
              <tr>
                <td>Phone:</td>
                <td className="ps-2">
                  {landline_number} <br /> {phone_number}.{" "}
                </td>
              </tr>
              <br />
              <tr>
                <td>Email:</td>
                <td className="ps-2">
                  <a href="mailto:sales@naharelectric.co.in">{email}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactDiv;
