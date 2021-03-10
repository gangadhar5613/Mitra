import React from "react";

function Hero(props) {
  return (
    <section className="h-screen container mx-auto flex hero hero-section">
      <div className="flex flex-col w-1/2 ml-20   items-center  justify-center h-full">
        <div className="mb-20 ml-10">
          <h2 className="text-3xl text-left font-bold leading-10">
            Mitra is an online platform to raise blood request and to raise
            medical emergency funds.
          </h2>
        </div>
        <div className="flex flex-row ">
          <button className="bg-red-700 shadow-md text-white  text-xl animate-pulse  px-6 py-2 mx-2">
            Request Blood
          </button>
          <button className="bg-red-700 text-white shadow-md text-xl animate-pulse px-6 py-2 mx-2 ">
            Raise Funds
          </button>
        </div>
      </div>
      <div className="hero-banner w-full h-full relative ml-20 mt-16 ">
        <img
          className=" w-4/5"
          src="https://image.freepik.com/free-vector/blood-donation-station_74855-6261.jpg"
        />
      </div>
    </section>
  );
}

export default Hero;
