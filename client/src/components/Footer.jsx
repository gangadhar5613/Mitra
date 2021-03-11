import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer className="p-20 text-white flex items-center justify-around ">
          <div className="2/12 h-1/2">
            <h6 className="w-min text-2xl font-sans border-b-4 mb-6 ">About</h6>
            <ul className="about-footer">
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Press</a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="2/12">
            <h6 className="w-min text-2xl font-sans border-b-4 mb-6 ">Help</h6>
            <ul>
              <li>
                <a>Request Blood</a>
              </li>
              <li>
                <a>Raise Funds</a>
              </li>
              <li>
                <a>Donating Funds</a>
              </li>
              <li>
                <a>Mitra Heroes</a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="2/12 h-1/2">
            <h6 className=" w-min text-2xl font-sans border-b-4 mb-6 ">
              Mitra
            </h6>
            <p>
              Mitra is an online platform to <br /> raise blood request and
              <br />
              to raise medical emergency <br /> fundings.
            </p>
          </div>
          <div className="2/12 items-center">
            <h6 className=" text-2xl font-sans mb-6 ">
              Registered Office Address
            </h6>

            <p>
              <i class="fas fa-map-marker-alt mr-3"></i> Dharamshala, Himachal
              Pradesh, India
            </p>
          </div>
          <div className=" 2/12 items-center">
            <h6 className=" w-full text-2xl font-sans  mb-4 ">
              Connect with us on :
            </h6>
            <a className="text-3xl mr-8">
              <i class="fab fa-twitter"></i>
            </a>
            <a className="text-3xl mr-8">
              <i class="fab fa-instagram"></i>
            </a>
            <a className="text-3xl mr-8">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </footer>
        <div className="pb-2 pt-0 flex items-center justify-center">
          <p className="text-white text-xl ">
            All Rights reserved to <a>Mitra</a>
          </p>
          <div className="ml-6">
            <a>
              <i class=" text-black text-2xl fab fa-google-play"></i>
            </a>
            <a>
              <i class="text-black text-2xl ml-4 fab fa-app-store-ios"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
