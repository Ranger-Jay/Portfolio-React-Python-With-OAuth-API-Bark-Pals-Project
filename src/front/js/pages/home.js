import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/bark-pals-bg.png";
// import rigoImageUrl from "../../img/bark-pal-bg2.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <p>{/* <img src={rigoImageUrl} /> */}</p>

      <p>
        Bark Pals is youe one stop solution to set up play dates, find parks,
        and meet fellow dog lovers
      </p>
    </div>
  );
};
