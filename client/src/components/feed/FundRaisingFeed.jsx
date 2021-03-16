import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";


class FundRaisingFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhdGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
      imageId: 0,
    };
  }

  componentDidUpdate () {
    setInterval(() => {
      if (this.state.images.length < this.state.imageId) {
        this.setState((prevState) => {
          return {
            imageId: 0,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            imageId: prevState.imageId + 1,
          };
        });
      }
    }, 7000);
  }

  render () {
    return (
      <article className="w-full bg-feed" id="dashboard">
        <section className="flex flex-row justify-evenly  ">
          <section className="cards flex flex-col  flex-wrap mx-20">
            <FundRaisingCard state={this.state} />
            <FundRaisingCard state={this.state} />
          </section>
        </section>
      </article>
    );
  }
}



function FundRaisingCard (props) {
  return (
    <div className="blood-request-card relative  rounded-xl overflow-hidden bg-white mx-1 px-5 my-5 shadow-2xl p-2 w-full">
      <a href="">
        <div className="flex flex-row items-center part-1">
          <div className='w-full absolute rounded-md -top-2 mb-5 left-0'>
            <progress className='w-full shadow h-2 bg-white rounded-md' value='20' max='100' ></progress>
            <div className='flex flex-row justify-between items-center'>
              <h2 className='text-md text-green-600 font-semibold'>Rs 10,000 Raised</h2>
              <span className='text-md text-green-700  font-light'>5%</span>
            </div>
          </div>
          <div className="flex flex-row pt-10 items-center justify-between">
            <div className="flex flex-col">
              <h3 className="my-2 font-bold">Fund Raising</h3>
              <div className="flex flex-col">
                <span className="animate-bounce w-5 h-5 text-red-700">URGENT:</span>
                <address className="text-gray-500">Thehr,Himachal Pradesh,India</address>
              </div>
            </div>
            <div>
              <span className="px-20">30 Minutes ago</span>
            </div>
          </div>
        </div>
      </a>
      <div className=" w-full my-2">
        <img className='w-full h-48 object-cover  object-center' src={props.state.images[props.state.imageId]} alt='patient' ></img>
      </div>
      <div className="user-location my-2">
        <div className="flex flex-row items-center justify-between">
          <div className='flex flex-row '>
            <i className="fas fa-user-circle text-green-500 text-5xl mx-4"></i>
            <div>
              <h2 className="font-bold">N Gangadhar Reddy</h2>
              <div className="flex flex-row my-2">
                <i className="fas fa-map-marker-alt text-red-400 mx-1"></i>
                <address className="text-gray-500">Thehr,Himachal Pradesh</address>
              </div>
            </div>
          </div>
          <div className=''>
            <button className='bg-red-700 px-6 py-2 text-white rounded-md'>Donate</button>
          </div>
        </div>
      </div>
      <div className="mx-3 py-2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.</p>
      </div>
    </div>
  );
}

export default FundRaisingFeed



