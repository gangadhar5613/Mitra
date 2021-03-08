import React from "react";


function Hero(props) {
  return (
    <section className="h-screen container mx-auto flex hero hero-section">
      <div className="flex flex-col w-1/2 ml-20   items-center  justify-center h-full">
        <div className="mb-20 ml-10">
          <h2 className="text-3xl italic leading-10 text-white text-center">
           <span className='text-5xl italic text-yellow-400'>"</span> A online platform to raise blood request and to raise medical
            emergency funds.<span className=' pt-10 text-5xl text-yellow-400'>"</span>
          </h2>
        </div>
        <div className="flex flex-row ">
          <button className="bg-white shadow-md text-red-500  text-xl animate-pulse  px-6 py-2 mx-2">
            Request Blood
          </button>
          <button className="bg-white text-red-500 shadow-md text-xl animate-pulse px-6 py-2 mx-2 ">
            Raise Funds
          </button>
        </div>
      </div>
      <div className='hero-banner w-full h-full relative -left-40 top-20 '  >
            
      </div>
    </section>
  );
}

export default Hero;
