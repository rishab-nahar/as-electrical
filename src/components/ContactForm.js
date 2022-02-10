import React from "react";

const ContactForm = () => {
  return (
    <>
      <section class="ls m-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 ">
              <h3 class="text-uppercase">Contact Form</h3>
              <i>Please fill up this contact form to directly mail us</i>
              <div class="form-error-message hidden">
                *Please fill all fields
              </div>
              <form class="contact-form row " method="post" action="./">
                <div class="col-sm-6">
                  <div class="contact-form-name">
                    {" "}
                    <label for="name">
                      *Full Name <span class="required">*</span>
                    </label>{" "}
                    <input
                      type="text"
                      aria-required="true"
                      size="30"
                      value=""
                      name="name"
                      id="name"
                      class="form-control  m-3"
                      placeholder="*Name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="contact-form-subject">
                    {" "}
                    <label for="company">
                      *Company<span class="required">*</span>
                    </label>{" "}
                    <input
                      type="text"
                      aria-required="true"
                      size="30"
                      value=""
                      name="company"
                      id="company"
                      class="form-control  m-3"
                      placeholder="*Company"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="contact-form-phone">
                    {" "}
                    <label for="phone">
                      *Phone<span class="required">*</span>
                    </label>{" "}
                    <input
                      type="text"
                      aria-required="true"
                      size="30"
                      value=""
                      name="phone"
                      id="phone"
                      class="form-control  m-3"
                      placeholder="*Phone Number"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="contact-form-email">
                    {" "}
                    <label for="email">
                      *Email address<span class="required">*</span>
                    </label>{" "}
                    <input
                      type="email"
                      aria-required="true"
                      size="30"
                      value=""
                      name="email"
                      id="email"
                      class="form-control  m-3"
                      placeholder="*Email Address"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="contact-form-message">
                    {" "}
                    <label for="message">Message</label>{" "}
                    <textarea
                      aria-required="true"
                      rows="5"
                      cols="45"
                      name="message"
                      id="message"
                      class="form-control  m-3"
                      placeholder="*Message..."
                    ></textarea>{" "}
                  </div>
                </div>
                <div class="col-sm-12 ">
                  <div class="contact-form-submit topmargin_10">
                    {" "}
                    <button
                      type="submit"
                      id="contact_form_submit"
                      name="contact_submit"
                      class="theme_button color1 inverse"
                    >
                      Send now
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

// <section class="ls">
// 	<div class="container">
// 		<div class="row">
// 			<div class="col-sm-8 " >
// 				<h3 class="text-uppercase">Contact Form</h3>
// 				<i>Please fill up this contact form to view the pdf</i>
// 				<div class="form-error-message hidden">*Please fill all fields</div>
// 				<form class="contact-form row " method="post" action="./">
// 					<div class="col-sm-6">
// 						<div class="contact-form-name"> <label for="name">*Full Name <span class="required">*</span></label> <input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control " placeholder="*Name" /></div>

// 					</div>
// 					<div class="col-sm-6">
// 						<div class="contact-form-subject"> <label for="company">*Company<span class="required">*</span></label> <input type="text" aria-required="true" size="30" value="" name="company" id="company" class="form-control " placeholder="*Company" /> </div>
// 					</div>
// 					<div class="col-sm-6">
// 						<div class="contact-form-phone"> <label for="phone">*Phone<span class="required">*</span></label> <input type="text" aria-required="true" size="30" value="" name="phone" id="phone" class="form-control " placeholder="*Phone Number" /> </div>
// 					</div>
// 					<div class="col-sm-6">
// 						<div class="contact-form-email"> <label for="email">*Email address<span class="required">*</span></label> <input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control " placeholder="*Email Address" /> </div>
// 					</div>
// 					<div class="col-sm-12">
// 						<div class="contact-form-message"> <label for="message">Message</label> <textarea aria-required="true" rows="5" cols="45" name="message" id="message" class="form-control " placeholder="*Message..."></textarea> </div>
// 					</div>
// 					<div class="col-sm-12">
// 						<div class="contact-form-submit topmargin_10"> <button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color1 inverse">Send now</button> </div>
// 					</div>
// 				</form>
// 			</div>
// 			<div class="col-sm-4 to_animate animated scaleAppear" data-animation="scaleAppear">
// 				<h3 class="text-uppercase">Contact Info</h3>
// 				<p> <i class="fa fa-map-marker fontsize_18 highlight rightpadding_10" aria-hidden="true"></i> Shop no 14-15, Ground Floor, 106 Govindappa Naicken street, Parrys. Chennai – 600001. </p>
// 				<p> <i class="fa fa-phone fontsize_18 highlight rightpadding_10" aria-hidden="true"></i> 044-42165770, 25362386. </p>
// 				<p> <i class="fa fa-envelope fontsize_18 highlight rightpadding_10" aria-hidden="true"></i> sales@naharelectric.co.in </p>
// 			</div>
// 		</div>
// 	</div>
// </section>
