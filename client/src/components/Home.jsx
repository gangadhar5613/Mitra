import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import BloodRequests from './BloodRequests';
import FundRaisingEvents from './FundRaisingEvents'


function Home(props){
    return(
        <>
          <Hero />
          <BloodRequests />
          <FundRaisingEvents />
        </>
    )
}

export default Home;
