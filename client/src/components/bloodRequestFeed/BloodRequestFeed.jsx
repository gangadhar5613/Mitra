import React from 'react'
import BloodRequests from '../BloodRequests'

class BloodRequestFeed extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <article class="w-full bg-feed transform   duration-1000 delay-300" id="dashboard">
                <section class="heading-section text-center my-10">
                    <h2 class="text-3xl font-bold my-2 text-red-600">Live Feed of Blood Request</h2>
                    <h3 class="text-1xl font-medium">Our Realtime Network Activity Feed</h3>
                </section>
                <section class="flex flex-row justify-evenly  ">
                     <section class="cards flex flex-col  flex-wrap mx-20">
                        <BloodRequestCard />
                        <BloodRequestCard />
                   </section>
                   <section class="filters  ">
                       <h2 class="text-3xl underline my-2 font-bold text-red-700">Filters</h2>
                       <div class="Activity">
                             <ul class="text-1xl">
                                 <li class="my-2 hover:text-red-700 font-medium text-red-600"><a href="">All Activity</a> </li>
                                 <li class="my-2 hover:text-red-700 font-medium"><a href="">Pending Requests</a></li>
                                 <li class="my-2 hover:text-red-700 font-medium"><a href="">Fulfilled Requests</a></li>
                                 <li class="my-2 hover:text-red-700 font-medium"><a href="">Near Me</a></li>
                             </ul>
                       </div>
                   </section>
                </section>
                <section class="filter-options"></section>
           </article>
        )
    }
}



function BloodRequestCard(props){
    return(
        <div class="blood-request-card mx-1 px-5 my-5 shadow-2xl p-2 w-full">
        <a href="">
            <div class="flex flex-row items-center part-1">
                <div class="blood-drop-img bg-red-700 text-center mx-2 flex items-center justify-center w-10 h-10 rounded-full">
                     <span class=" top-2 text-white  ">B+</span>
                </div>
                  <div class="flex flex-row items-center justify-between">
                       <div class="flex flex-col">
                           <h3 class="my-2 font-bold">Blood Request</h3>
                           <div class="flex flex-col">
                               <span class="animate-bounce w-5 h-5 text-red-700">URGENT:</span>
                               <address class="text-gray-500">Thehr,Himachal Pradesh,India</address>
                           </div>
                       </div>
                       <div>
                           <span class="px-20">30 Minutes ago</span>
                       </div>
                  </div>
             </div>
        </a>
          <div class="mx-3 my-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6781.482581438319!2d76.33010752476967!3d31.80479997510551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b3a01ce0521af%3A0xcdc698f8334756c8!2sThehra%2C%20Himachal%20Pradesh%20176036!5e0!3m2!1sen!2sin!4v1611255746479!5m2!1sen!2sin" width="550" height="200"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
          <div class="user-location my-2">
              <div class="flex flex-row">
                  <i class="fas fa-user-circle text-green-500 text-5xl mx-4"></i>
                  <div>
                      <h2 class="font-bold">N Gangadhar Reddy</h2>
                      <div class="flex flex-row my-2">
                          <i class="fas fa-map-marker-alt text-red-400 mx-1"></i>
                          <address class="text-gray-500">Thehr,Himachal Pradesh</address>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mx-3 py-2">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eaque.</p>
          </div>
    </div>
    )
}

export default BloodRequestFeed



