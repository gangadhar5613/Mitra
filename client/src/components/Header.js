import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="shadow-lg bg-white">
        <header className="flex p-8 items-center  container mx-24">
          <div>
            <h2 className="  font-sans text-5xl font-semibold">Mitra</h2>
          </div>
          <nav className="flex  justify-between w-full items-center ml-16">
            <ul className="flex flex-wrap">
              <li>
                <a className="text-xl font-sans font-bold tracking-wider border-b-4 border-red-700 hover:border-blue-900 ">
                  Home
                </a>
              </li>
              <li className="ml-8">
                <a className="text-xl font-sans font-bold tracking-wider border-b-4 border-red-700 hover:border-blue-900">
                  About
                </a>
              </li>
              <li className="ml-8">
                <a className="text-xl font-sans font-bold tracking-wider border-b-4 border-red-700 hover:border-blue-900">
                  FAQs
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap self-end">
              <li className="ml-6">
                <button className="font-sans font-bold text-xl p-3 hover:bg-red-500 border-2 border-black rounded-xl">
                  Sign In
                </button>
              </li>
              <li className="ml-6  ">
                <button className="font-sans font-bold p-3 text-xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 border-2 border-black rounded-xl">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
