import React from "react";

class Update extends React.Component {
  render() {
    return (
      <div className="flex w-1/2 ml-12 ">
        <div className=" max-h-full w-1/2 mr-6 bg-white my-8 border-white rounded-2xl shadow-md border-2 p-8">
          <h4 className="font-sans text-2xl font-semibold my-7">
            Latest Updates
          </h4>
          <p className="mb-7 text-lg text-gray-700 leading-8">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <div className="w-full mt-12">
            <textarea
              className="w-full h-32 pt-2 pl-2 border-red-700 rounded-lg border-2 bg-gray-100"
              placeholder="Request Update"
            ></textarea>
            <div class="inline-block mr-2 mt-2 w-full">
              <button
                type="button"
                class=" mx-auto block focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-red-700 hover:bg-blue-600 hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className=" w-2/5 bg-white my-8 border-white rounded-2xl shadow-md border-2 p-8">
          <h4 className="font-sans text-2xl font-semibold my-7">Donate</h4>
          <img
            className="w-full"
            src="https://www.svgrepo.com/show/54587/donate.svg"
          />
          <div class="inline-block mr-2 mt-2 w-full">
            <button
              type="button"
              class=" mx-auto block focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-red-700 hover:bg-blue-600 hover:shadow-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
