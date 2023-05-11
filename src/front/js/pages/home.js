import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/bark-pals.jpg";
import BgImageUrl from "../../img/bark-pals.jpg";
// import "../../img/bark-pal-bg.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {/* <h1>Bark Pals</h1> */}
      <p>
        <img src={BgImageUrl} />
      </p>

      <h4>A playdate for your best friend</h4>
    </div>
  );
};
