import React from "react";
import "../../styles/common.css";
import "../../styles/navbar.css";
import "../../styles/footer.css";
import "../../styles/skewed-header.css";
import "../../styles/page-container.css";
import "../../styles/helpers.css";
import "../../styles/contact.css";
import "../../styles/form.css";
import "../../styles/buttons.css";
import "../../styles/media-queries.css";
import background from "../../img/contact.jpg";
import logo from "../../img/bark-pals.jpg";

// <link rel="stylesheet" href="../../styles/common.css" />
// <link rel="stylesheet" href="../../styles/nav.css" />
// <link rel="stylesheet" href="../../styles/footer.css" />
// <link rel="stylesheet" href="../../styles/skewed-header.css" />
// <link rel="stylesheet" href="../../styles/page-container.css" />
// <link rel="stylesheet" href="../../styles/helpers.css" />
// <link rel="stylesheet" href="../../styles/contact.css" />
// <link rel="stylesheet" href="../../styles/form.css" />
// <link rel="stylesheet" href="../../styles/buttons.css" />
// <link rel="stylesheet" href="../../styles/media-queries.css" />

export const Contact = () => {
  return (
    <div>
      <div class="skewed-header">
        {/* <!-- Start Top Main Skewed Wrapper --> */}

        <div
          class="header-bg"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* <!-- Will be handled in CSS --> */}
        </div>
        {/* <!-- End Background Wrapper --> */}

        <div class="skewed-header-wrapper">
          {/* <!-- Start Sub-Main Parent Wrapper --> */}

          <div class="skewed-header-content">
            {/* <!-- Start Content Wrapper (this is the Flex Box) --> */}

            <div class="heading-wrapper">
              {/* <!-- Start H1 About Us Wrapper --> */}
              <h1>Contact</h1>
            </div>
            {/* <!-- End H1 About Us Wrapper --> */}
          </div>
          {/* <!-- End Content Wrapper (This is the Flex Box) --> */}
        </div>
        {/* <!-- End Sub-Main Parent Wrapper --> */}
      </div>
      {/* <!-- End Top Main Skewed Wrapper --> */}

      <div class="page-container">
        {/* <!-- Start Page Container --> */}

        <div class="contact-grid-wrapper">
          {/* <!-- Start Contact Grid Wrapper --> */}

          <div class="company-meta-data-sidebar-wrapper">
            {/* <!-- Start Sidebar Wrapper --> */}

            <div class="logo">
              {/* <!-- Start Logo --> */}
              <img src={logo} alt="Logo" />
            </div>
            {/* <!-- End Logo --> */}

            <div class="company-details-wrapper">
              {/* <!-- Start Map Details --> */}
              <i class="fas fa-map-marker-alt"></i>
              <div>
                123 Any St
                <br />
                Miami, FL, 33015
              </div>
            </div>
            {/* <!-- End Map Details --> */}

            <div class="company-details-wrapper">
              {/* <!-- Start Phone Details --> */}
              <i class="fas fa-phone-volume"></i>
              <div>555 555 5555</div>
            </div>
            {/* <!-- End Phone Details --> */}

            <div class="company-details-wrapper">
              {/* <!-- Start Hours Details --> */}
              <i class="far fa-clock"></i>
              <div>10 AM - MIDNIGHT</div>
            </div>
            {/* <!-- End Hours Details --> */}
          </div>
          {/* <!-- End Sidebar Wrapper --> */}

          <div class="form">
            {/* <!-- Start Form Wrapper --> */}

            <div class="form-group">
              {/* <!-- Start Form Name --> */}
              <input type="text" id="fullName" placeholder="Your name" />
              <label for="fullName">Your name</label>
            </div>
            {/* <!-- End Form Name --> */}

            <div class="form-group">
              {/* <!-- Start Form Email --> */}
              <input type="email" id="email" placeholder="Your email" />
              <label for="email">Your email</label>
            </div>
            {/* <!-- End Form Email --> */}

            <div class="form-group">
              {/* <!-- Start Form Message --> */}
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <label for="message">Message</label>
            </div>
            {/* <!-- End Form Message --> */}

            <div class="spacer10"></div>

            <div class="centered-btn-wrapper">
              {/* <!-- Start Button --> */}
              <button type="submit" class="btn">
                Send
              </button>
            </div>
            {/* <!-- End Button --> */}
          </div>
          {/* <!-- End Form Wrapper --> */}
        </div>
        {/* <!-- End Contact Grid Wrapper --> */}
      </div>
      {/* <!-- End Page Container --> */}
      
    </div>
  );
};
