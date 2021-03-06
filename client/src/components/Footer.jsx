import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="w-full ">
          {/* <svg
            className="absolute "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#991B1B"
              fill-opacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,186.7C672,213,768,203,864,176C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> */}
        
        </div>
        <footer  className="p-15 bg-gradient-to-r from-red-500 via-red-400 to-yellow-500 text-white flex items-center justify-around ">
          <div className="2/12">
            <h6 className="w-min text-3xl font-sans border-b-4 mb-6 ">About</h6>
            <ul>
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
            <h6 className="w-min text-3xl font-sans border-b-4 mb-6 ">Help</h6>
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
          <div className="2/12">
            <h6 className=" w-min text-3xl font-sans border-b-4 mb-6 ">
              Mitra
            </h6>
            <p>
              Mitra is an online platform to <br /> raise blood request and
              <br />
              to raise medical emergency <br /> fundings.
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className=" 2/12 items-center">
            <h6 className="w-96 text-3xl font-sans border-b-4 mb-6 ">
              Registered Office Address
            </h6>
            <i class="fas fa-map-marker-alt"></i>
            <p>
              Dharamshala <br /> Himachal Pradesh, India
            </p>
          </div>
          <div className=" 2/12 items-center">
            <h6 className=" w-full text-3xl font-sans border-b-4 mb-6 ">
              Connect with us on :
            </h6>
            <a className="text-4xl mr-8">
              <i class="fab fa-twitter"></i>
            </a>
            <a className="text-4xl mr-8">
              <i class="fab fa-instagram"></i>
            </a>
            <a className="text-4xl mr-8">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </footer>
        <div className="bg-red-700 p-6 flex items-center justify-center">
          <p className="text-white text-xl ">
            All Rights reserved to <a>Mitra</a>
          </p>
          <div className="ml-6">
            <a>
              <i class=" text-yellow-500 text-2xl fab fa-google-play"></i>
            </a>
            <a>
              <i class="text-yellow-500 text-2xl ml-4 fab fa-app-store-ios"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
