import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/logo-1.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.props.updateUser(null, false, true);
  };

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
              <NavLink activeClassName="active" to="/">
                <span className="mx-4 text-md font-bold text-white">Home</span>
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                <span className="mx-4 text-md font-bold text-white">About</span>
              </NavLink>
              <NavLink activeClassName="active" to="/faqs">
                <span className="mx-4 text-md font-bold text-white">FAQs</span>
              </NavLink>
              <NavLink activeClassName="active" to="/feed">
                <span className="mx-4 text-md font-bold text-white">Feed</span>
              </NavLink>
            </div>
            <div className={this.props.user ? "hidden" : "flex items-center"}>
              <div className="inline-block mx-2">
                <NavLink activeClassName="active" to="/login">
                  <button
                    type="button"
                    className="focus:outline-none text-red-700 text-md py-2 px-4 rounded-md bg-gradient-to-r from-white to-white transform hover:scale-110"
                  >
                    Sign In
                  </button>
                </NavLink>
              </div>
              <div className="inline-block mx-2">
                <NavLink activeClassName="active" to="/register">
                  <button
                    type="button"
                    className="focus:outline-none text-red-700 text-md py-2 px-4 rounded-md bg-white to-red-600 transform hover:scale-110"
                  >
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
            <div className={this.props.user ? "flex items-center" : "hidden"}>
              <div>
                <NavLink activeClassName="active" to="/user/dashboard">
                  <button
                    type="button"
                    className="focus:outline-none text-red-700 text-md py-2 px-4 rounded-md bg-white to-red-600 transform hover:scale-110"
                  >
                    Dashboard
                  </button>
                </NavLink>
              </div>
              <div className="inline-block mx-2">
                <Link to="/"
                  onClick={this.handleLogout}
                  type="button"
                  className="focus:outline-none text-red-700 text-md py-2 px-4 rounded-md bg-white to-red-600 transform hover:scale-110"
                >
                  Logout
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
