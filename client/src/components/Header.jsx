import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="shadow-xl font-family bg-white header">
        <header className="flex items-center justify-between py-4">
          <div className="ml-16">
            <h1 className="text-4xl text-white  font-semibold ml-20  ">
              Mitra
            </h1>
          </div>
          <nav className="mr-16 flex justify-around items-center">
            <div className="mr-6">
              <Link to="/">
                <a className="mx-4 text-xl font-bold text-white">Home</a>
              </Link>
              <Link to="/about">
                <a className="mx-4 text-xl font-bold text-white">About</a>
              </Link>
              <Link to="/faqs">
                <a className="mx-4 text-xl font-bold text-white">FAQs</a>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="inline-block mx-2">
                <Link to="/login">
                  <button
                    type="button"
                    className="focus:outline-none text-red-700 text-xl py-2 px-4 rounded-md bg-gradient-to-r from-white to-white transform hover:scale-110"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
              <div className="inline-block mx-2">
                <Link to="/register">
                  <button
                    type="button"
                    className="focus:outline-none text-red-700 text-xl py-2 px-4 rounded-md bg-white to-red-600 transform hover:scale-110"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
