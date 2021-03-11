import React from 'react'

function Filters(props){
    return(
        <section class="filters shadow-lg bg-white  mt-8 fixed p-5   ">
        <h2 class="text-3xl underline  my-2 font-bold text-yellow-300">Filters</h2>
        <div class="Activity">
              <ul class="text-1xl">
                  <li class="my-2 hover:text-red-700 font-medium text-red-700"><a href="">All Activity</a> </li>
                  <li class="my-2 hover:text-red-700  font-medium"><a href="">Pending Requests</a></li>
                  <li class="my-2 hover:text-red-700  font-medium"><a href="">Fulfilled Requests</a></li>
                  <li class="my-2 hover:text-red-700  font-medium"><a href="">Near Me</a></li>
              </ul>
        </div>
    </section>
    )
}

export default Filters