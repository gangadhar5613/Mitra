import React from "react";

class EventSection extends React.Component {
  render() {
    return (
      <div className="flex w-1/2">
        <div className=" w-1/12 border-black mr-6">
          <div className="mx-auto my-8">
            <a className=" rounded-full">
              <i class="fab fa-twitter text-4xl bg-white w-20 p-2 rounded-full shadow   ml-8 my-6"></i>
            </a>
            <a className="text-4xl ">
              <i class="fab fa-instagram ml-8 mb-6  text-4xl bg-white w-20 p-2 rounded-full shadow "></i>
            </a>
            <a className="text-4xl ">
              <i class="fab fa-facebook-f ml-8 mb-6  text-4xl bg-white w-20 p-2 rounded-full shadow "></i>
            </a>
            <a className="text-4xl ">
              <i class="fab fa-linkedin-in ml-8 mb-6  text-4xl bg-white w-20 p-2 rounded-full shadow"></i>
            </a>
          </div>
        </div>
        <div className="bg-white w-full my-8 border-white rounded-2xl shadow-md border-2 p-8">
            {/* <div className='w-10 text-center flex items-center justify-center h-10 bg-red-600 rounded-full'>
              <span className='text-2xl text-white animate-pulse'>B+</span>
            </div> */}
          <h1 className="mx-auto my-4 font-sans text-2xl  font-semibold">
            Funds Request for emergency in a hospital.
          </h1>
          <div className=" mx-auto my-4">
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
              className="w-full"
            />
          </div>
          <div className="mx-auto my-4">
            <h3 className="underline font-sans text-2xl font-semibold my-7">
              Description
            </h3>
            <p className="mb-7 text-md text-gray-700 leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="mb-7 text-lg text-gray-700 leading-8">

            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSection;
