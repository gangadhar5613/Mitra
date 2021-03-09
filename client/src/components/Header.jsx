import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="shadow-xl bg-white header">
        <header className="flex items-center justify-between py-4">
          <div className="ml-16">
            <h1 className="text-4xl text-white  font-semibold ml-20  ">
              Mitra
            </h1>
          </div>
          <nav className="mr-16 flex justify-around items-center">
            <div className="mr-6">
              <a className="mx-4 text-xl font-bold text-white">Home</a>
              <a className="mx-4 text-xl font-bold text-white">About</a>
              <a className="mx-4 text-xl font-bold text-white">FAQs</a>
            </div>
            <div className="flex items-center">
              <div class="inline-block mx-2">
                <button
                  type="button"
                  class="focus:outline-none text-red-700 text-xl py-2.5 px-5 rounded-md bg-gradient-to-r from-white to-white transform hover:scale-110"
                >
                  Sign In
                </button>
              </div>
              <div class="inline-block mx-2">
                <button
                  type="button"
                  class="focus:outline-none text-red-700 text-xl py-2.5 px-5 rounded-md bg-white to-red-600 transform hover:scale-110"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
