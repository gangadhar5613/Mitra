import React from "react";
import EventSection from "./EventSection";
import Update from "./Update";

function FunRaising() {
  return (
    <div className='py-20'>
      <div className="flex">
        <EventSection />
        <Update />
      </div>
      <div>{/* <FundsGallery /> */}</div>
    </div>
  );
}

export default FunRaising;
