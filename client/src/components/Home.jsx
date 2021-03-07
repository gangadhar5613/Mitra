import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import BloodRequests from './BloodRequests';
import FundRaisingEvents from './FundRaisingEvents'


function Home(props){
    return(
        <>
          <Header />
          <Hero />
          <BloodRequests />
          <FundRaisingEvents />
          <Footer />
        </>
    )
}

export default Home;
