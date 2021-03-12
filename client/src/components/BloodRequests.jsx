import React from 'react'
import { Link } from 'react-router-dom'

class BloodRequests extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article className='mt-8 blood-request-cards overflow-hidden relative   py-10  h-full'>
                <section className='flex flex-row items-end justify-end mr-10'>
                    <div className='text-center  items-center justify-center flex flex-col'>
                        <h3 className='text-5xl mb-2 font-bold text-shadow-md text-red-500'>Blood Requests</h3>
                        <p className='text-2xl  text-shadow-sm'>Accept the blood request near to you and become the life savior</p>
                        <q className='text-4xl text-red-700  font-semibold '>Bring a life back to power</q>
                        <div className='flex flex-col relative  top-80'>
                            <i className="fas mt-5 ml-5 relative left-10 text-red-800 animate-pulse text-9xl fa-heartbeat"></i>
                            <div className='flex flex-row items-center justify-between'>
                                <button className='  mt-2 ml-7 w-52 shadow-lg relative left-10 bg-white text-red-700 px-6 py-2 rounded'>Donate</button>
                                <Link to='/bloodrequest/create'>
                                   <button onClick={this.props.handleBloodRequest} className='  mt-2 ml-7 w-52 shadow-lg relative left-10 bg-white text-red-700 px-6 py-2 rounded'>Create Blood Request</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section class=" text-gray-700 flex flex-row items-center  px-5   ">
                        <div>
                          <i className="fas text-6xl text-white cursor-pointer hover:text-red-800 fa-arrow-circle-left"></i>
                        </div>
                        <div className='flex items-start flex-row'>
                            <BloodRequestCard />
                            <BloodRequestCard />
                            <BloodRequestCard />
                        </div>
                        <div>
                          <i className="fas text-6xl text-white cursor-pointer hover:text-red-800 fa-arrow-circle-right"></i>
                        </div>
                </section>
        </article>
        )
    }
}



function BloodRequestCard(props){
    return(
        
        <div class="p-4 card md:mb-0 mb-6 flex flex-col ">
        <div class="bg-gray-300 h-56 w-60 rounded-lg shadow-md bg-cover bg-center" >
           <img src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature'></img>

        </div>

        <div class=" w-60 bg-white inset-0 transform  hover:scale-75 transition duration-300 cursor-pointer -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        
        <div class="header-content flex flex-col items-start justify-start ">
          <div className='flex items-start'>
                <div class="category-badge flex-1  h-8 w-8 flex items-center justify-center m rounded-full m-1 bg-red-700 text-white">
                    <span>
                        B+
                    </span>
                    </div>
                    <div className='mx-2'>
                        <h2 className='text-2xl text-yellow-600 animate-bounce'>Urgent</h2>
                    </div>
          </div>
        </div>
        <div class="title-post font-medium text-center">
            <span className=' text-xs text-red-600 font-bold text-justify'>Required B+ blood for a surgery</span>
        </div>
        <div>
             <div className='flex flex-row justify-start items-center'>
                 <i className="fas text-2xl mr-2 text-blue-600  fa-hospital"></i>
                  <h3 className='font-bold text-yellow-600 hover:text-red-800 hover:underline'>Chandra Hospital</h3>
             </div>
             <div className='my-1'>
                 <p className='text-sm font-light text-justify'> Required O+ blood for the emergency surger for my relative who is suffering from health issues. </p>
             </div>
        </div>  
        <div className='flex flex-col mt-2'>
            <div className='flex flex-row mb-5 items-start'>
                <img className='w-10 h-10 rounded-full' src='https://images.unsplash.com/photo-1610043809095-9c87fe936e03?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='user' ></img>
                <div className='ml-2'>
                    <h2 className=' text-xs font-light text-red-700'>N Gangadhar Reddy</h2>
                    <div className='flex flex-row mt-1 items-center'>
                       <i className="fas text-green-700 fa-map-marker-alt"></i>
                       <address className='text-sm font-light'>Thehr</address>
                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <button className='bg-red-600 w-full text-white text-md px-4 py-1 rounded'>Donate</button>
            </div>
        </div>      
        </div>
    </div>
    )
}

export default BloodRequests