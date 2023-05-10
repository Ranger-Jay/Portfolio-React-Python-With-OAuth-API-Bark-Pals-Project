// import React, { Component } from "react";

// export const Footer = () => (
//   <footer className="footer mt-auto py-3 text-center"></footer>
// );

import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with <i className="fa fa-heart text-danger" /> by Miami's PT-46 Bark
      Pals team at{" "}
    </p>

    <a class="school-link " href="http://www.4geeksacademy.com">
      4Geeks Academy
    </a>
    {/* <a href="http://www.4geeksacademy.com">4Geeks Academy</a> */}
  </footer>
);
