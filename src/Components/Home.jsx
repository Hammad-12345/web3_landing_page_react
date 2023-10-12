import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Section from "./Section";
import Testimonials from "./Testimonials";
import Faqs from "./Faqs";
import Khowledge from "./Khowledge";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Container />
        <Section />
        <Testimonials />
        <Faqs />
        <Khowledge />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
