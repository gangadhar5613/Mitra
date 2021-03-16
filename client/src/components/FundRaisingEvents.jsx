import React from 'react'
import donationImg from '../../public/images/donation.png'
class FundRaisingEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <article className=' relative  blood-request-cards   py-20  h-full'>
        <section className='flex flex-row items-end justify-end mr-10'>
          <div className='text-center  items-center justify-center flex flex-col'>
            <h3 className='text-5xl mb-2 font-bold text-shadow-md top-10 relative left-40 text-red-500'>Fund Raising</h3>
            <p className='text-2xl relative left-40 top-10 w-1/2   text-shadow-sm'>Donate as much you can to the save the life of person and become a hero among all.</p>
            <div className='relative top-96 left-10'>
              <img className='w-80 h-32' src={donationImg} alt='donation' ></img>
              <div>
                <span className="flex h-5 w-5 relative -top-3   left-72 ml-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </div>
              <button className=' text-red-800  mt-2 ml-7 w-52 shadow-lg  bg-white px-6 py-2 rounded'>Donate</button>
            </div>
          </div>
        </section>
        <section className=" text-gray-700 flex flex-row items-center  px-5   ">
          <div>
            <i className="fas text-6xl text-white cursor-pointer hover:text-red-800 fa-arrow-circle-left"></i>
          </div>
          <div className='flex items-start flex-row'>
            <FundRaisingCard />
            <FundRaisingCard />
            <FundRaisingCard />
          </div>
          <div>
            <i className="fas text-6xl text-white cursor-pointer hover:text-red-800 fa-arrow-circle-right"></i>
          </div>
        </section>
      </article>
    );
  }
}



function FundRaisingCard (props) {
  return (

    <div className="p-4  md:mb-0 mb-6 flex flex-col ">
      <div className="bg-gray-300 h-56 w-60 rounded-lg shadow-md bg-cover bg-center" >
        <img src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature'></img>

      </div>

      <div className=" w-60 bg-white inset-0 transform  hover:scale-75 transition duration-300 cursor-pointer -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

        <div className="header-content inline-flex ">
          <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
            <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
          </div>
          <div className="category-title flex-1 text-sm"> Vue</div>
        </div>
        <div className="title-post font-medium">Mon titre</div>

        <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
            <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Lire plus</span></button>
        </div>

      </div>
    </div>
  );
}

export default FundRaisingEvents