import React, { useState } from "react";
// import { BsList } from "react-icons/bs";

const Navbar = () => {
  const [hamburicon, updatehamburicon] = useState(false);
  const [performanimation, updateanimation] = useState(false);
  const [Opendrawer, updatedrawer] = useState("inner_navanimationopen");
  const Opensmallnavbar = () => {
    if (hamburicon) {
      updatehamburicon(false);
      updatedrawer("inner_navanimationclose");
      setTimeout(() => {
        updateanimation(false);
      }, 300);
    } else {
      updatehamburicon(true);
      updateanimation(true);
      updatedrawer("inner_navanimationopen");
    }
  };
  return (
    <>
      {/* hamburger1 */}
      <div className="navbar">
        <div
          className={hamburicon ? "hamburger1" : "hamburger"}
          onClick={Opensmallnavbar}
        ></div>
        <div className={`logo`}>
          <h1>Txn</h1>
          <nav className="menu">
            <ul className={`inner_nav ${performanimation ? Opendrawer : null}`}>
              <li>Hub</li>
              <li>Mint</li>
              <li>Features</li>
              <li>Socials</li>
            </ul>
          </nav>
        </div>
        <div className="btn">
          <button className="button">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
