import React from 'react'

function Steps(props){
    return(
        <div className='mt-5 ml-10 flex flex-col   justify-items-center'>
            <div className='flex flex-col justify-items-center  justify-center '>
                <div className='flex flex-row items-center'>
                   <span className={props.step >= 1 ? 'bg-red-700 text-white w-10 text-center  shadow-lg flex items-center justify-center text-xl h-10 rounded-full' : 'bg-black text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full'}>1</span>
                   <h2 className='  ml-4 text-md'>Mobile verification</h2>
                </div>
            </div>
            <div className={props.step >= 2 ? 'h-14 w-0.5 relative left-5 shadow-lg bg-red-700' : ' h-14 w-0.5 relative left-5 bg-black'}></div>
            <div className='flex mt-0 pt-0 flex-col justify-items-center  justify-center '>
                <div className='flex flex-row items-center'>
                <span className={props.step >= 2 ? 'bg-red-700 text-white shadow-lg w-10 text-center flex items-center justify-center text-xl h-10 rounded-full' : 'bg-black text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full'}>2</span>
                   <h2 className='  ml-4 text-md'>Basic Details</h2>
                </div>
            </div>
            <div className={props.step >= 3 ? 'h-14 w-0.5 relative left-5 shadow-lg bg-red-700' : ' h-14 w-0.5 relative left-5 bg-black'}></div>
            <div className='flex flex-col justify-items-center  justify-center '>
                <div className='flex flex-row items-center'>
                <span className={props.step >= 3 ? 'bg-red-700 shadow-lg text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full' : 'bg-black text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full'}>3</span>
                   <h2 className='  ml-4 text-md'>Password</h2>
                </div>
            </div>
            <div className={props.step >= 4 ? 'h-14 w-0.5 relative left-5 shadow-lg bg-red-700' : ' h-14 w-0.5 relative left-5 bg-black'}></div>
            <div className='flex flex-col justify-items-center  justify-center '>
                <div className='flex flex-row items-center'>
                <span className={props.step === 4 ? 'bg-red-700 shadow-lg text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full' : 'bg-black text-white w-10 text-center flex items-center justify-center text-xl h-10 rounded-full'}>4</span>
                   <h2 className='  ml-4 text-md'>Password</h2>
                </div>
            </div>
        </div>
    )
}

export default Steps