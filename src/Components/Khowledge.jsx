import React from "react";
import bulb from "../Images/bulb.png";
const Khowledge = () => {
  return (
    <div className="Khowledge_grow_your_influence">
      <img src={bulb} alt="" />
      <div className="Khowledge_section_one">
        <h2>Khowledge grow your influence</h2>
      </div>

      <div className="Khowledge_section_two">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          quaerat in error, pariatur optio dolorum corporis dolore maiores
          suscipit. Quam.
        </p>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
};

export default Khowledge;
