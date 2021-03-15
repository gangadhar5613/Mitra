import React from 'react'

class BloodRequestFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <article className="w-full feed bg-feed  pt-5   " id="dashboard">
        <section className="flex flex-row   ">
          <section className="cards flex flex-col  flex-wrap mx-20">
            <BloodRequestCard />
            <BloodRequestCard />
            <BloodRequestCard />
            <BloodRequestCard />
            <BloodRequestCard />
            <BloodRequestCard />
          </section>
        </section>
        <section className="filter-options"></section>
      </article>
    );
  }
}

function BloodRequestCard (props) {
  return (
    <div className="blood-request-card border-2 cursor-pointer border-red-500 rounded bg-white mx-1 px-5 my-5 shadow-2xl p-2 w-full">
      <a href="">
        <div className="flex flex-row items-center part-1">
          <div className="blood-drop-img bg-red-700 text-center mx-2 flex items-center justify-center w-10 h-10 rounded-full">
            <span className=" top-2 text-white  ">B+</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h3 className="my-2  font-bold">Blood Request</h3>
              <div className="flex flex-col">
                <span className="animate-bounce w-5 h-5 text-red-700">URGENT:</span>
                <address className="text-gray-500">Thehr,Himachal Pradesh,India</address>
              </div>
            </div>
            <div>
              <span className="px-20">30 Minutes ago</span>
            </div>
          </div>
        </div>
      </a>
      <div className="mx-3 my-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6781.482581438319!2d76.33010752476967!3d31.80479997510551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b3a01ce0521af%3A0xcdc698f8334756c8!2sThehra%2C%20Himachal%20Pradesh%20176036!5e0!3m2!1sen!2sin!4v1611255746479!5m2!1sen!2sin" width="550" height="200" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div className="user-location my-2">
        <div className="flex flex-row">
          <i className="fas fa-user-circle text-green-500 text-5xl mx-4"></i>
          <div>
            <h2 className="font-bold">N Gangadhar Reddy</h2>
            <div className="flex flex-row my-2">
              <i className="fas fa-map-marker-alt text-red-400 mx-1"></i>
              <address className="text-gray-500">Thehr,Himachal Pradesh</address>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 py-2 flex justify-between">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.</p>
        <div className='mx-2'>
          <button className='bg-red-600 w-full text-white text-md px-4 py-1 rounded'>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default BloodRequestFeed



