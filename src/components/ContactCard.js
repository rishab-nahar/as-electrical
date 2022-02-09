import React from "react";
import { Address, email, landline_number, phone_number } from "./../Details";
const ContactCard = () => {
  return (
    <div className="contactcard">
      <p className="nav-number">
        {" "}
        <i className="fa fa-phone grey rightpadding_5" aria-hidden="true"></i>
        {` ${landline_number} ${phone_number}`}
      </p>
      <p className="nav-mail-id">
        {" "}
        <i
          className="fa fa-envelope grey rightpadding_5"
          aria-hidden="true"
        ></i>{" "}
        <a href="mailto:nawkush9@gmail.com">{email}</a>{" "}
      </p>
    </div>
  );
};

export default ContactCard;
