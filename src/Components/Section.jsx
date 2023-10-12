import React, { useState } from "react";
import Global from "../Images/globe.png";
import Global1 from "../Images/globe1.png";
import CardImage1 from "../Images/card2.png";
import CardImage2 from "../Images/card3.png";
const Section = () => {
  const [SectionCards] = useState([
    {
      img: Global1,
      AccountName: "Easy Account Registration",
      AccountDescription:
        "Global banking made easy and available in 140+ countries",
      ButtonText: "learn",
    },
    {
      img: CardImage1,
      AccountName: "Easy Account Registration",
      AccountDescription:
        "Global banking made easy and available in 140+ countries",
      ButtonText: "learn",
    },
    {
      img: CardImage2,
      AccountName: "Easy Account Registration",
      AccountDescription:
        "Global banking made easy and available in 140+ countries",
      ButtonText: "learn",
    },
  ]);
  return (
    <>
      <div className="section">
        <div className="inner_section">
          <div className="inner_section_text">
            <h5>For traders</h5>
            <h2>Prefered by traders with fully customisable API</h2>
            <p>
              Traders on our platform experience a seamless and efficient
              trading environment, designed for their needs. Our platform
              prioritizes speed, ensuring lightning-fast trade execution without
              any lag.
            </p>
            <button className="button">Explore Now</button>
          </div>
          <div className="inner_section_image">
            <img src={Global} alt="" />
          </div>
        </div>
        <div className="Card_Main_Section">
          {SectionCards.map((element) => (
            <>
              <div className="Card">
                <img src={element.img} alt="" />
                <h4>{element.AccountName}</h4>
                <p>{element.AccountDescription}</p>
                <button className="button">
                  {element.ButtonText} &#x2192;
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section;
