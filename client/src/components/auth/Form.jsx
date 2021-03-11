import React from "react";
import Loader from "../Loader";

function Form(props) {
  function handleChangingForm(step) {
    switch (step) {
      case 1:
        return (
          <StepForm1
            handleInput={props.handleInput}
            handleVerifyOtp={props.handleVerifyOtp}
            handleOtpInput={props.handleOtpInput}
            state={props.state}
            otpSent={props.otpSent}
          />
        );
        break;
      case 2:
        return <StepForm2 handleInput={props.handleInput} />;
        break;
      case 3:
        return <StepForm3 state={props.state} handleInput={props.handleInput} />;
        break;
      case 4:
        return (
          <StepForm4 state={props.state} handleInput={props.handleInput} />
        );
        break;
      default:
        break;
    }
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex justify-center flex-col relative">
        {handleChangingForm(props.step)}
        <div className="mt-4 flex items-end w-full justify-between ">
          <button
            onClick={props.handlePrevForm}
            id={props.step}
            className={
              props.step >= 2 ? "bg-red-700 text-white px-6 py-2" : "hidden"
            }
          >
            Back
          </button>
          <button
            hidden={props.state.step >= 2}
            disabled={props.state.errors.mobile}
            onClick={
              props.step == 1 && !props.otpSent
                ? props.handleOtp
                : props.handleVerifyOtp
            }
            id={props.step}
            className={
              props.otpSent
                ? "bg-red-700 text-white px-6 py-2"
                : props.state.errors.mobile || props.state.otpSent
                ? "bg-gray-700 text-black px-6 py-2"
                : props.state.mobileVerifiedSuccessfull &&
                  props.state.otpResponse
                ? "hidden"
                : "bg-red-700 text-white px-6 py-2"
            }
          >
            {props.step == 1 && !props.otpSent ? "Send OTP" : "Verify Otp"}
          </button>
          <button
            onClick={
              props.state.step == 4 ? props.handleUserSubmit : props.handleForm
            }
            id={props.step}
            className={
              props.state.otpVerified || !props.state.mobileVerifiedSuccessfull
                ? "hidden"
                : "bg-red-700 text-white px-6 py-2"
            }
          >
            {props.state.step == 4 ? "Submit" : "Next"}
          </button>
          {/* <button onClick={props.state.step == 4 ? props.handleUserSubmit : props.handleForm} id={props.step} className={(props.state.otpVerified || !props.state.mobileVerifiedSuccessfull) ? 'hidden' : 'bg-red-700 text-white px-6 py-2'}>{props.state.step == 4 ? 'Submit' : 'Next'}</button> */}
        </div>
      </div>
    </div>
  );
}

function StepForm1(props) {
  return (
    <div className="flex flex-row  items-end justify-center">
      <div className="flex flex-col">
        <div>
          <h3 className="text-4xl font-bold text-shadow-md mb-4">
            Your Phone !
          </h3>
          <label htmlFor="mobile" className="text-2xl font-bold text-shadow-md">
            Phone Number
          </label>
          <input
            onChange={props.handleInput}
            required={true}
            type="tel"
            id="mobile"
            name="mobile"
            className="mobile w-full my-2 outline-none border-2 border-gray-400 h-12  text-black shadow-lg hover:bg-red-700 focus:bg-white focus:ring-0"
            value={props.mobile}
            placeholder="Enter your 10 digits mobile number"
          ></input>
          <p>
            A 6 digit OTP will be sent via SMS to verify your mobile number.
          </p>
          <span className="text-white text-md">
            {props.state.errors.mobile ? props.state.errors.mobile : ""}
          </span>
        </div>
        <div className={props.otpSent ? "mt-3" : "hidden"}>
          <h3 className="text-center text-shadow-md text-green-600 text-md">
            {props.state.otpSent && !props.state.mobileVerifiedSuccessfull
              ? "Otp sent successfull"
              : "Invalid Otp"}
          </h3>
          <h3 className="text-center text-shadow-md text-green-600 text-md">
            {props.state.otpResponse && props.state.mobileVerifiedSuccessfull
              ? "OTP Verified Successfully"
              : "OTP Not Verified"}
          </h3>
          <label htmlFor="code" className="text-xl font-bold text-shadow-md">
            Enter OTP
          </label>
          <div>
            <input
              onChange={props.handleOtpInput}
              name="first"
              className="w-10 border-2 mr-2  text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
            <input
              onChange={props.handleOtpInput}
              name="second"
              className="w-10 border-2 mr-2 text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
            <input
              onChange={props.handleOtpInput}
              name="third"
              className="w-10 border-2 mr-2 text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
            <input
              onChange={props.handleOtpInput}
              name="fourth"
              className="w-10 border-2 mr-2 text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
            <input
              onChange={props.handleOtpInput}
              name="fifth"
              className="w-10 border-2 mr-2 text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
            <input
              onChange={props.handleOtpInput}
              name="sixth"
              className="w-10 border-2 mr-2 text-center border-red-600"
              type="tel"
              maxLength="1"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepForm2(props) {
  return (
    <form>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col ml-2">
          <label
            htmlFor="fullname"
            className="text-md font-semibold text-shadow-md"
          >
            Full Name
          </label>
          <input
            required
            onChange={props.handleInput}
            type="text"
            id="fullname"
            name="fullname"
            className="fullname w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your fullname "
          ></input>
        </div>
        <div className="flex flex-col ml-2">
          <label
            htmlFor="email"
            className="text-md font-semibold text-shadow-md"
          >
            Email
          </label>
          <input
            onChange={props.handleInput}
            type="email"
            id="email"
            name="email"
            className="email w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your email number"
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col mr-2">
          <label
            htmlFor="bloodgroup"
            className="text-md font-semibold text-shadow-md"
          >
            Blood Group
          </label>
            <select onChange={props.handleInput} className="bloodgroup w-96 mt-1 block   outline-none border-2 border-red-800  h-8  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0">
                  <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>OH+</option>
              </select>
        </div>
        <div className="flex flex-col ml-2">
          <label
            htmlFor="dateofbirth"
            className="text-md font-semibold text-shadow-md"
          >
            Date Of Birth
          </label>
          <input
            onChange={props.handleInput}
            type="date"
            id="dateofbirth"
            name="dateofbirth"
            className="dateofbirth w-96 mt-1 block   outline-none border-2 border-red-800  h-8  shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your dateofbirth number"
          ></input>
        </div>
      </div>
    </form>
  );
}

function StepForm3(props) {
  return (
    <form>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-col mr-2">
          <label
            htmlFor="mobile"
            className="text-md font-semibold text-shadow-md"
          >
            Profile Image
          </label>
          <div className='flex flex-row  items-center'>
            <div className='bg-red-500 mr-1 p-2 inline-block rounded-full'>
            {/* <i class="fas fa-user"></i> */}
                <img className='w-20 h-20 rounded-full' src={(props.state.profileImage) ? props.state.profileImage : 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt='user' ></img>
            </div>
            <input
            onChange={props.handleInput}
            type="file"
            id="profileImage"
            name="profileImage"
            className="mobile  mt-1 block   outline-none py-1   h-10  text-black border-2 border-red-500 hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Upload Profile Pic"
          ></input>
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <label
            htmlFor="mobile"
            className="text-md font-semibold text-shadow-md"
          >
            Medical / Blood Report
          </label>
          <input
            onChange={props.handleInput}
            type="file"
            id="mobile"
            name="mobile"
            className="mobile  mt-1 block   outline-none py-1   h-10    border-2 border-red-500  hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your mobile number"
          ></input>
        </div>
      </div>
    </form>
  );
}

function StepForm4(props) {
  return (
    <form>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col mr-2">
          <label
            htmlFor="pincode"
            className="text-md font-semibold text-shadow-md"
          >
            Pincode
          </label>
          <input
            onChange={props.handleInput}
            type="number"
            id="pincode"
            name="pincode"
            className="pincode w-96 mt-1 block    outline-none border-2 border-red-800  h-8   shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your pincode "
          ></input>
        </div>
        <div className="flex flex-col ml-2">
          <label
            htmlFor="state"
            className="text-md font-semibold text-shadow-md"
          >
            State
          </label>
          <input
            readOnly={true}
            onChange={props.handleInput}
            type="text"
            id="state"
            name="state"
            value={props.state.location ? props.state.location.state : ""}
            className="state w-96 mt-1 block   outline-none border-2 border-red-800  h-8   shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your state"
          ></input>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col mr-2">
          <label
            htmlFor="district"
            className="text-md font-semibold text-shadow-md"
          >
            District
          </label>
          <input
            onChange={props.handleInput}
            type="text"
            id="district"
            name="district"
            value={props.state.location ? props.state.location.district : ""}
            className="district w-96 mt-1 block   outline-none border-2 border-red-800  h-8  shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your district"
          ></input>
        </div>
        <div className="flex flex-col ml-2">
          <label
            htmlFor="address"
            className="text-md font-semibold text-shadow-md"
          >
            Address
          </label>
          <select onChange={props.handleInput}>
            {!props.state.location ? (
              <option value="select">select</option>
            ) : (
              props.state.location.postOffices.map((val) => {
                return <option value={val}>{val}</option>;
              })
            )}
          </select>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <div className="flex flex-col ml-2">
          <label
            htmlFor="password"
            className="text-md font-semibold text-shadow-md"
          >
            Password
          </label>
          <input
            onChange={props.handleInput}
            type="password"
            id="password"
            name="password"
            className="password w-96 mt-1 block   outline-none border-2 border-red-800  h-8  shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0"
            placeholder="Enter your Password"
          ></input>
        </div>
      </div>
      <div
        className={
          props.state.locationFetching == null ||
          props.state.locationFetching == "yes"
            ? ""
            : "hidden"
        }
      >
        <Loader />
      </div>
    </form>
  );
}

export default Form;
