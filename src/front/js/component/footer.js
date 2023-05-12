// import React, { Component } from "react";

// export const Footer = () => (
//   <footer className="footer mt-auto py-3 text-center"></footer>
// );

import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div class="spacer60"></div>
    {/* <!-- Empty Div Class Helper Used For Styling --> */}

    <div class="footer">
      {/* <!-- Start Main Footer Wrapper --> */}

      {/* <!-- End Logo Footer Wrapper --> */}

      <div class="social-media-icons-wrapper">
        {/* <!-- Start Social Media Footer Wrapper --> */}

        <a href="http://instagram.com/">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="http://twitter.com/">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="http://facebook.com/">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
    <p>
      &copy; 2023. Made with <i className="fa fa-heart text-danger" /> by
      Miami's PT-46 Bark Pals team at{" "}
    </p>
    <a class="school-link " href="http://www.4geeksacademy.com">
      4Geeks Academy
    </a>
    {/* <a href="http://www.4geeksacademy.com">4Geeks Academy</a> */}
  </footer>
);
