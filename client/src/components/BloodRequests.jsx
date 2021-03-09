import React from 'react'

class BloodRequests extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article className='mt-8 blood-request-cards overflow-hidden   py-10  h-full'>
                <section className='flex flex-row items-end justify-end mr-10'>
                    <div className='text-center  items-center justify-center flex flex-col'>
                        <h3 className='text-5xl mb-2 font-bold text-shadow-md text-red-500'>Blood Requests</h3>
                        <p className='text-2xl  text-shadow-sm'>Accept the blood request near to you and become the life savior</p>
                        <i className="fas mt-5 ml-5 relative left-10 text-red-600 animate-pulse text-9xl fa-heartbeat"></i>
                        <button className='text-white mt-2 ml-7 w-52 shadow-lg relative left-10 bg-red-600 px-6 py-2 rounded'>Donate</button>
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
        
        <div class="p-4  md:mb-0 mb-6 flex flex-col ">
        <div class="bg-gray-300 h-56 w-60 rounded-lg shadow-md bg-cover bg-center" >
           <img src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature'></img>

        </div>

        <div class=" w-60 bg-white inset-0 transform  hover:scale-75 transition duration-300 cursor-pointer -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        
        <div class="header-content inline-flex ">
            <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
            <div class="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
            </div>
            <div class="category-title flex-1 text-sm"> Vue</div>
        </div>
        <div class="title-post font-medium">Mon titre</div>

        <div class="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
            <button class="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span class="">Lire plus</span></button>
        </div>
        
        </div>
    </div>
    )
}

export default BloodRequests