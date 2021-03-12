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
      <div className='home'>
        <Hero />
        <BloodRequests handleBloodRequest={props.handleBloodRequest} />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default Home;
