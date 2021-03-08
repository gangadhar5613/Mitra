import React from 'react'


function Aside(props){
    return(
        <section className='ml-5 h-full'>
            <div className='flex flex-col  items-center justify-center '>
                <button className='w-40 mb-2 bg-black text-white px-6 py-2'>Blood Requests</button>
                <button className='w-40 mb-2 bg-black text-white px-6 py-2'>Blood Donated</button>
                <button className='w-40 mb-2 bg-black text-white px-6 py-2'>Fund Rasing</button>
                <button className='w-40 mb-2 bg-black text-white px-6 py-2'>Funds Donated</button>
            </div>
        </section>
    )
}

export default Aside