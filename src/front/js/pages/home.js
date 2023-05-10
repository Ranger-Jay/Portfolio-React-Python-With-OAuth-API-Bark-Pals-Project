import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/bark-pals-bg.png";
import BgImageUrl from "../../img/bark-pals-bg.png";
// import "../../img/bark-pal-bg.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Bark Pals</h1>
      <p>
        <img src={BgImageUrl} />
      </p>

      <h4>A date for you and your best friend</h4>
    </div>
  );
};
