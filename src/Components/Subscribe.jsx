import React from "react";
import curve from "../Images/curve.png";

const Subscribe = () => {
  return (
    <>
      <div className="Subscribe">
        <div className="Subscribe_Section_One">
          <h3>Subscribe</h3>
          <h1>Subscribe To Get Latest Update From Us</h1>
        </div>
        <img src={curve} alt="" />
        <div className="Subscribe_Section_Two">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            explicabo exercitationem quis consequuntur voluptas nihil
          </p>
          <div className="Subscribe_Section_Two_Input_Box">
            <input type="text" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
