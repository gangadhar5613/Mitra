import React from 'react'

class FundRaisingEvents extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article className='mt-8'>
                <section>
                    <div className='text-center'>
                        <h3 className='text-3xl mb-2 font-bold text-shadow-md text-red-500'>Fund Raising</h3>
                        <p className='text-xl text-gray-400 text-shadow-sm'>Accept the following blood requests and become a life savior</p>
                    </div>
                </section>
                <section class=" text-gray-700  ">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="flex scroll  flex-row mx-6 overflow-x-scroll sm:-m-4  bg-scroll -mb-10 -mt-4">
                               <FundRaisingCard />  
                               <FundRaisingCard />              
                               <FundRaisingCard />              
                               <FundRaisingCard />              
                               <FundRaisingCard />                          
                            </div>
                        </div>
                </section>
        </article>
        )
    }
}



function FundRaisingCard(props){
    return(
        
        <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
        <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" >
        <img src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature'></img>

        </div>

        <div class=" w-70 bg-white inset-0 transform  hover:scale-75 transition duration-300 cursor-pointer -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
        
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

export default FundRaisingEvents