import React from 'react'

function MobileVerify(props){
    return(
        <div className='absolute top-1/4 left-2/4 bg-gray-100 shadow-2xl'>
            <div className='w-96 p-10 h-96 flex flex-col items-center justify-center'>
                <span className='text-md font-bold text-green-700 my-5'>OTP Sent to your mobile number</span>
                <div className='flex flex-col items-center justify-center'>
                    <label htmlFor='code' className='text-2xl font-bold text-red-600'>Enter OTP</label>
                    <input type='tel'  id='code' name='code' className='code  w-60 h-8' placeholder='Enter otp received'></input>
                    <button onClick={props.handleMobileVerify} className='bg-red-500 text-white px-6 py-2 my-2'>Submit</button>
                </div>
            </div>
        </div>
    )
}


export default MobileVerify