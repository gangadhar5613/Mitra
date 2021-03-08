import React from 'react'

function Hero(props){
    return(
        <section className='h-screen hero'>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='mb-20'>
                    <h2 className='text-3xl text-white'>A online platform to raise blood request and to raise medical emergency fundings.</h2>
                </div>
                <div className='flex flex-row '>
                        <button className='bg-red-500 text-xl animate-pulse  px-6 py-2 mx-2 text-white'>Request Blood</button>
                        <button className='bg-red-500 text-xl animate-pulse px-6 py-2 mx-2 text-white'>Raise Funds</button>
                </div>
            </div>
        </section>
    )
}

export default Hero