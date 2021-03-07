import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import BloodRequests from "./BloodRequests";
import FundRaisingEvents from "./FundRaisingEvents";
import Testimonial from "./Testimonial";

function Home(props) {
  return (
    <>
      <Header />
      <Hero />
      <BloodRequests />
      <FundRaisingEvents />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
