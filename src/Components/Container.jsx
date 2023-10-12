import React, { useState } from "react";
import TXTautomation from "../Images/crypto1.png";
import Webflow from "../Images/webflow.png";
import mparticle from "../Images/mparticle.png";
import chargebee from "../Images/chargebee.png";
import corsair from "../Images/corsair.svg";
import emachines from "../Images/emachines.png";

const Container = () => {
  const [PartnersImage] = useState([
    Webflow,
    mparticle,
    chargebee,
    corsair,
    emachines,
  ]);
  return (
    <>
      <div className="container">
        <div className="text">
          <h3>WEB 3 Experience</h3>
          <h2>Txn Automation</h2>
          <p>
            TXN is a web3 automated market aggregator and multi-chain batch
            miner. TXN was created with the goal of creating a seamless and
            frictionless experience...
          </p>
          <button className="button">Explore Now &#8599;</button>
        </div>

        <div className="image">
          <img src={TXTautomation} alt="" />
        </div>
      </div>
      <div className="partners">
        {PartnersImage.map((Element) => (
          <>
            <span>
              <img src={Element} alt="" />
            </span>
          </>
        ))}
      </div>
    </>
  );
};

export default Container;
