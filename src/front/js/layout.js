import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import NavbarPage from "./component/navbar";
import { Footer } from "./component/footer";
import { Playdate } from "./pages/Playdate";
import { Contact } from "./pages/contact";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavbarPage />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/Login" />
            <Route element={<Signup />} path="/Signup" />
            <Route element={<Contact />} path="/Contact" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Playdate />} path="/playdate" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
