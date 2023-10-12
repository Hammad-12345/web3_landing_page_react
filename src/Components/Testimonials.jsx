import React, { useState } from "react";
import Person1 from "../Images/person1.png";
import Person2 from "../Images/person2.png";
import Person3 from "../Images/person3.png";
import Person4 from "../Images/person4.jpg";
const Testimonials = () => {
  const [TestimonialsCards] = useState([
    {
      img: Person1,
      TestimonialCardDescription:
        "You made it so simple. Our new way of doing trade has become so much simple.",
      ClientName: "@alexborn",
    },
    {
      img: Person2,
      TestimonialCardDescription:
        "I just love how these people build this finance service that is so flexible and easy to use.",
      ClientName: "@chrisjames",
    },
    {
      img: Person3,
      TestimonialCardDescription:
        "Netglobe very professional- highly recommended for personal and businesses.",
      ClientName: "@skairubelga",
    },
    {
      img: Person4,
      TestimonialCardDescription:
        "I am always happy and feel secure that the transaction between me and my client",
      ClientName: "@mal",
    },
  ]);
  return (
    <>
      <div className="testimonials">
        <div className="testimonials_text">
          <h3>Testimonials</h3>
          <h1>User love Netglobe</h1>
          <p>
            See what our members are saying. Trusted by 1200+ world class
            businesses
          </p>
          <button className="button">Read all 2,432 reviews</button>
        </div>
        <div className="testimonials_cards">
          {TestimonialsCards.map((element) => (
            <>
              <div className="Card Card_Testimonials">
                <img src={element.img} alt="" />
                <p>{element.TestimonialCardDescription}</p>
                <div>
                  <button className="button">{element.ClientName}</button>
                  <span>&#x2714;</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
