import React from 'react'

function Form(props){
   function handleChangingForm (step) {
         switch (step) {
            case 1:
                 return <StepForm1 handleInput={props.handleInput} handleVerifyOtp={props.handleVerifyOtp} handleOtpInput={props.handleOtpInput} state={props.state} otpSent={props.otpSent} />
                break;
            case 2:
                return <StepForm2  handleInput={props.handleInput} />
                break;
            case 3:
                return <StepForm3 handleInput={props.handleInput} />
                break;
            case 4:
                return <StepForm4 handleInput={props.handleInput} />
                break;
             default:
                 break;
         }
    }
    return(
        <div className='flex items-center justify-center h-full' >
        <div className='flex justify-center flex-col relative'>
             {handleChangingForm(props.step)}
            <div className='mt-4 flex items-end w-full justify-between '>
              <button onClick={props.handlePrevForm} id={props.step} className={props.step >= 2 ? 'bg-red-700 text-white px-6 py-2' : 'hidden'}>Back</button>
              <button disabled={props.state.errors.mobile} onClick={(props.step == 1 && !props.otpSent ) ? props.handleOtp : props.handleVerifyOtp} id={props.step} className={props.otpSent ? 'bg-red-700 text-white px-6 py-2' : (props.state.errors.mobile ? 'bg-gray-700 text-black px-6 py-2' : 'bg-red-700 text-white px-6 py-2') }>{(props.step == 1 && !props.otpSent) ? 'Send OTP' : 'Verify Otp'}</button>
              <button  onClick={ props.handleChangingForm} id={props.step} className={ (! props.state.otpVerified) ? 'hidden' : 'bg-red-700 text-white px-6 py-2' }>Next</button>
              {/* <button onClick={ props.otpSent ?   props.handleForm : null} id={props.step} className={props.otpSent ? 'bg-red-700 text-white px-6 py-2' : 'hidden'}>{props.otpSent ? 'Next' : ''}</button> */}
            </div>
        </div>
        </div>
    )
}

function StepForm1(props){
     return(
        <div className='flex flex-row  items-end justify-center'>
            <div className='flex flex-col'>
                <div>
                   <label htmlFor='mobile' className='text-2xl font-bold text-shadow-md'>Mobile</label>
                   <input onChange={props.handleInput} required={true}  type='tel' id='mobile' name='mobile' className='mobile w-96 mt-1 block   outline-none border-2 border-red-800  h-11  text-black shadow-lg hover:bg-red-700 focus:bg-white focus:ring-0' value={props.mobile} placeholder='Enter your 10digits mobile number'></input>
                  <span className='text-white text-md'>{props.state.errors.mobile ? props.state.errors.mobile : '' }</span>
                </div>
                <div className={(props.otpSent) ? 'mt-3' : 'hidden'}>
                    <h3 className='text-center text-shadow-md text-green-600 text-md'>{!props.state.otp ? 'Otp sent successfull' : 'Invalid Otp'}</h3>
                    <h3 className='text-center text-shadow-md text-green-600 text-md'>{(props.state.otpResponse && props.state.mobileVerifiedSuccessfull) ? 'OTP Verified Successfully': 'OTP Not Verified'}</h3>
                   <label htmlFor='code' className='text-xl font-bold text-shadow-md'>Enter OTP</label>
                   <div>
                       <input onChange={props.handleOtpInput} name='first' className='w-10 border-2 mr-2  text-center border-red-600' type='tel' maxLength="1"></input>
                       <input onChange={props.handleOtpInput} name='second' className='w-10 border-2 mr-2 text-center border-red-600' type='tel' maxLength="1" ></input>
                       <input onChange={props.handleOtpInput} name='third'  className='w-10 border-2 mr-2 text-center border-red-600' type='tel' maxLength="1" ></input>
                       <input onChange={props.handleOtpInput} name='fourth'  className='w-10 border-2 mr-2 text-center border-red-600' type='tel' maxLength="1" ></input>
                       <input onChange={props.handleOtpInput} name='fifth'   className='w-10 border-2 mr-2 text-center border-red-600' type='tel' maxLength="1" ></input>
                       <input onChange={props.handleOtpInput} name='sixth' className='w-10 border-2 mr-2 text-center border-red-600' type='tel' maxLength="1" ></input>
                   </div>
                </div>
            </div>
        </div>
     )
}


function StepForm2(props){
    return(
          <form>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='firstname' className='text-md font-semibold text-shadow-md'>First Name</label>
                        <input type='text' id='firstname' name='firstname' className='firstname w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your firstname number'></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='lastname' className='text-md font-semibold text-shadow-md'>Last Name</label>
                        <input type='text' id='lastname' name='lastname' className='lastname w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your lastname number'></input>
                    </div>
               </div>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='mobile' className='text-md font-semibold text-shadow-md'>Mobile</label>
                        <input type='tel' id='mobile' name='mobile' className='mobile w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your mobile number'></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='email' className='text-md font-semibold text-shadow-md'>Email</label>
                        <input type='email' id='email' name='email' className='email w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your email number'></input>
                    </div>
               </div>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='bloodgroup' className='text-md font-semibold text-shadow-md'>Blood Group</label>
                        <input type='text' id='bloodgroup' name='bloodgroup' className='bloodgroup w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your bloodgroup number'></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='dateofbirth' className='text-md font-semibold text-shadow-md'>Date Of Birth</label>
                        <input type='date' id='dateofbirth' name='dateofbirth' className='dateofbirth w-96 mt-1 block   outline-none border-2 border-red-800  h-8  shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your dateofbirth number'></input>
                    </div>
               </div>
          </form>

    )
}




function StepForm3(props){
    return(
          <form>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='mobile' className='text-md font-semibold text-shadow-md'>First Name</label>
                        <input type='file' id='mobile' name='mobile' className='mobile  mt-1 block   outline-none py-1   h-10  text-black border-2 border-red-500 hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your mobile number'></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='mobile' className='text-md font-semibold text-shadow-md'>Last Name</label>
                        <input type='file' id='mobile' name='mobile' className='mobile  mt-1 block   outline-none py-1   h-10    border-2 border-red-500  hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your mobile number'></input>
                    </div>
               </div>
          </form>
    )
}




function StepForm4(props){
    return(
          <form>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='mobile' className='text-sm font-semibold text-shadow-md'>Click here to get the location</label>
                        <button className='w-96 bg-black text-white outline-none h-8 mt-2'>Current location</button>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='state' className='text-md font-semibold text-shadow-md'>State</label>
                        <input type='text' id='state' name='state' className='state w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your state'></input>
                    </div>
               </div>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='district' className='text-md font-semibold text-shadow-md'>District</label>
                        <input type='text' id='district' name='district' className='district w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your district'></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='address' className='text-md font-semibold text-shadow-md'>Address</label>
                        <input type='text' id='address' name='address' className='address w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your address'></input>
                    </div>
               </div>
               <div className='flex flex-row mt-2'>
                    <div className='flex flex-col mr-2'>
                        <label htmlFor='pincode' className='text-md font-semibold text-shadow-md'>Pincode</label>
                        <input type='tel' id='pincode' name='pincode' className='pincode w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your pincode '></input>
                    </div>
                    <div className='flex flex-col ml-2'>
                        <label htmlFor='password' className='text-md font-semibold text-shadow-md'>Password</label>
                        <input type='password' id='password' name='password' className='password w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your Password'></input>
                    </div>
               </div>
          </form>
    )
}








export default Form