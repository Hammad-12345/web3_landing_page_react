import React, { useState } from "react";

const Faqs = () => {
  const [FaqContent, UpdateFaqsContent] = useState([
    {
      FaqsHeading: "What is the price?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      // isanimate: "isactiveanimate",
    },
    {
      FaqsHeading: "How many keys are there?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      icon: "&#x2715",
    },
    {
      FaqsHeading: "Are keys unbindable?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      icon: "&#x2715",
    },
    {
      FaqsHeading: "What chain do txn support?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      icon: "&#x2715",
    },
    {
      FaqsHeading: "What OS is TN compatible with?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      icon: "&#x2715",
    },
    {
      FaqsHeading: "Is TXN safe to use?",
      FaqsDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit odit similique doloremque ab unde. Placeat recusandae nobis voluptate atque, fugit itaque nam quos.",
      IsActive: false,
      icon: "&#x2715",
    },
  ]);
  const [Animatefaq, updateanimate] = useState("isactiveanimate");
  const [CheckAnimatefaq, updatecheckanimatefaq] = useState(false);

  const OpenFaqDes = (Element, index) => {
    if (Element.IsActive) {
      updateanimate("isnotactiveanimate");
      setTimeout(() => {
        updatecheckanimatefaq(false);
        Element.IsActive = false;
        UpdateFaqsContent([...FaqContent]);
        updatecheckanimatefaq(true);
        updateanimate("isactiveanimate");
      }, 200);
    } else {
      Element.IsActive = true;
      UpdateFaqsContent([...FaqContent]);
      updatecheckanimatefaq(true);
      updateanimate("isactiveanimate");
    }
  };

  return (
    <>
      <div className="Faq_Section">
        <div className="Faq_Section_Headers">
          <h1>Frequently Asked Questions</h1>
          <p>Have question ? We are here to help</p>
        </div>
        <div className="Faqs_Points">
          {FaqContent.map((Element, index) => (
            <>
              <div className="Faqs_Point_Main">
                <div
                  className="faqs_points_main_heading"
                  onClick={() => {
                    OpenFaqDes(Element, index);
                  }}
                >
                  <h3> {Element.FaqsHeading}</h3>
                  <div
                    className={`${Element.IsActive ? `plusicon` : `crossicon`}`}
                  ></div>
                </div>
                {Element.IsActive ? (
                  <>
                    <div
                      className={`faqs_points_main_Description ${
                        CheckAnimatefaq ? Animatefaq : null
                      }
                      `}
                    >
                      {Element.FaqsDescription}
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;
