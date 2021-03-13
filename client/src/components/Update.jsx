import React from "react";

class Update extends React.Component {
  render() {
    return (
      <div className="flex w-1/2 ml-12 ">
        <div className=" h-3/5 w-1/2 mr-6 bg-white my-8 border-white rounded-2xl shadow-md border-2 p-8">
          <h4 className="font-sans text-2xl font-semibold my-7">
            Latest Updates
          </h4>
          <div className="w-full mt-12">
            <textarea
              className="w-full h-32 pt-2 pl-2 border-red-700 rounded-lg border-2 bg-gray-100"
              placeholder="Request Update"
            ></textarea>
            <div className="inline-block mr-2 mt-2 w-full">
              <button
                type="button"
                className=" mx-auto block focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-red-700 hover:bg-blue-600 hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>

        <div className='flex flex-col mt-4  shadow p-1 '>
          <span className='underline font-bold text-red-700'>Update:</span>
          <p className=" text-sm text-gray-700 leading-8">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
        </div>
        <div className="w-2/5 my-8">
          <div className=" bg-white border-white rounded-2xl shadow-md border-2 p-8">
            <h4 className="font-sans text-2xl text-center font-semibold my-7">Donate</h4>
            <div className='my-2'>
              <span><i className="fab mx-2 text-5xl  cursor-pointer text-yellow-700 fa-cc-visa"></i></span>
              <i className="fab mx-2 text-5xl cursor-pointer text-yellow-700 fa-cc-paypal"></i>
              <i className="fab mx-2 text-5xl cursor-pointer text-yellow-700 fa-google-pay"></i>
            </div>
            <div className="inline-block mr-2 mt-2 w-full">
              <button
                type="button"
                className=" mx-auto block focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-red-700 hover:bg-blue-600 hover:shadow-lg"
              >
                Donate Now
              </button>
            </div>
          </div>
          <div className=" mt-7 bg-white supporters border-white rounded-2xl overflow-scroll overflow-y-visible shadow-md border-2 p-8">
            {/* <h4 className="font-sans text-2xl font-semibold my-7 mx-auto">
              Donation
            </h4> */}
            <div className="flex shadow-lg rounded-md p-4">
                <img
                  className="donor-image w-10 h-10"
                  src="https://pbs.twimg.com/profile_images/1355996031658323969/y18eVQix_400x400.jpg"
                />
                <div className=" mx-auto w-full rounded flex flex-col text-center">
                  <p className="text-sm mx-auto ">Kushal Dave just Donated !</p>
                  <p className="text-md">Rs. 10,000</p>
                </div>
            </div>
            <div className="flex shadow-lg rounded-md p-4 mt-5 pt-5">
                <img
                  className="donor-image w-10 h-10"
                  src="https://pbs.twimg.com/profile_images/1355996031658323969/y18eVQix_400x400.jpg"
                />
                <div className=" mx-auto w-full flex rounded flex-col text-center">
                  <p className="text-sm mx-auto ">Kushal Dave just Donated !</p>
                  <p className="text-md">Rs. 10,000</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
