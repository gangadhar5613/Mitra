import React from "react";
import Loader from "../Loader";

function Form (props) {
	const {step, mobileVerifiedSuccessful, errors, mobile, otpSent} = props.state

	function handleChangingForm () {
    switch (step) {
      case 1:
        return (
          <StepForm1
            handleInput={props.handleInput}
            handleVerifyOtp={props.handleVerifyOtp}
            handleOtpInput={props.handleOtpInput}
            state={props.state}
          />
        );
        break;
      case 2:
        return <StepForm2 handleInput={props.handleInput} state={props.state} />;
        break;
      case 3:
        return <StepForm3 state={props.state} handleInput={props.handleInput} fileHandler={props.fileHandler} />;
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


	function handlerDifferentBtn () {
		console.log(step, !mobileVerifiedSuccessful, typeof mobile)
		if (step == 1) {
			if (!mobileVerifiedSuccessful && !otpSent) {
				return <button onClick={props.handleOtp} className="bg-red-700 text-white px-6 py-2 text-left">
					Send OTP
				</button>;
			} else {
				return (
					<button onClick={props.handleVerifyOtp} className="bg-red-700 text-white px-6 py-2">
						Verify Otp
					</button>
				);
			}
		}
		if (step == 2) {
			return (
				<button onClick={props.handleNextForm} className="bg-red-700 text-white px-6 py-2">
					Next
				</button>
			);
		}
		if (step == 3) {
			return (
				<>
					<button onClick={props.handlePrevForm} className="bg-red-700 text-white px-6 py-2 mx-4">
						Back
					</button>
					<button onClick={props.handleNextForm} className="bg-red-700 text-white px-6 py-2">
							Next
					</button>
				</>
			)
		}
		if (step == 4) {
			return (
				<>
					<button onClick={props.handlePrevForm} className="bg-red-700 text-white px-6 py-2 mx-4">
						Back
					</button>
					<button onClick={props.handleUserSubmit} className="bg-red-700 text-white px-6 py-2">
						Submit
					</button>
				</>
			);
		}
	}

  return (
		<div className="flex items-center justify-center h-full">
			<div className="flex justify-center flex-col relative">
				{handleChangingForm(props.step)}
				<div className="text-right p-4">
					{handlerDifferentBtn()}
				</div>
			</div>
		</div>
  );
}

function StepForm1 (props) {

	return (
		<div className="flex flex-wrap justify-between flex-col p-4 flex-grow">
			<div className="w-full my-2">
				<h3 className="text-4xl font-bold text-shadow-md mb-4">Your Phone !</h3>
				<label htmlFor="mobile" className="text-md font-semibold text-shadow-md">
					Phone Number
				</label>
				<input required onChange={props.handleInput} type="text" id="mobile" name="mobile" className="block w-96 outline-none border-2 border-red-800   shadow-lg hover:bg-red-700  focus:ring-0" placeholder="Enter your 10 digits mobile number" value={props.state.mobile}></input>
			</div>
			<p>{!props.state.otpSent ? "A 6 digit OTP will be sent via SMS to verify your mobile number." : "OTP had been sent successful"}</p>
			<div>
				{props.state.otpSent && !props.state.otpVerified && (
					<div>
						<label htmlFor="code" className="text-xl font-bold text-shadow-md">
							Enter OTP
						</label>
						<div>
							<input onChange={props.handleOtpInput} name="first" className="w-10 border-2 mr-2  text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[0]}></input>
							<input onChange={props.handleOtpInput} name="second" className="w-10 border-2 mr-2 text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[1]}></input>
							<input onChange={props.handleOtpInput} name="third" className="w-10 border-2 mr-2 text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[2]}></input>
							<input onChange={props.handleOtpInput} name="fourth" className="w-10 border-2 mr-2 text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[3]}></input>
							<input onChange={props.handleOtpInput} name="fifth" className="w-10 border-2 mr-2 text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[4]}></input>
							<input onChange={props.handleOtpInput} name="sixth" className="w-10 border-2 mr-2 text-center border-red-600" type="text" maxLength="1" value={props.state.mobileOtp[5]}></input>
						</div>
						<p className={props.state.otpSent && !props.state.otpError ? "hidden": ""}>Invalid OTP</p>
					</div>
				)}
			</div>
		</div>
	);
}

function StepForm2 (props) {
	console.log
  return (
		<form>
			<div className="flex flex-wrap justify-between p-4">
				<div className="w-48 my-2">
					<label htmlFor="firstName" className="text-md font-semibold text-shadow-md">
						First Name
					</label>
					<input required onChange={props.handleInput} type="text" id="firstName" name="firstName" className="block   outline-none border-2 border-red-800   shadow-lg hover:bg-red-700  focus:ring-0" placeholder="Enter your first name " value={props.state.firstName}></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="middleName" className="text-md font-semibold text-shadow-md">
						Middle Name
					</label>
					<input required onChange={props.handleInput} type="text" id="middleName" name="middleName" className="block   outline-none border-2 border-red-800   shadow-lg hover:bg-red-700  focus:ring-0" placeholder="Enter your middle name " value={props.state.middleName}></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="lastName" className="text-md font-semibold text-shadow-md">
						Last Name
					</label>
					<input required onChange={props.handleInput} type="text" id="lastName" name="lastName" className="block   outline-none border-2 border-red-800   shadow-lg hover:bg-red-700  focus:ring-0" placeholder="Enter your last name " value={props.state.lastName}></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="email" className="text-md font-semibold text-shadow-md">
						Email
					</label>
					<input required onChange={props.handleInput} type="email" id="email" name="email" className="block   outline-none border-2 border-red-800 shadow-lg hover:bg-red-700  focus:ring-0" placeholder="Enter your email " value={props.state.email}></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="dob" className="text-md font-semibold text-shadow-md">
						DOB
					</label>
					<input required onChange={props.handleInput} type="date" id="dob" name="dob" className="block   outline-none border-2 border-red-800 shadow-lg hover:bg-red-700  focus:ring-0" value={props.state.dob}></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="bloodGroup" className="text-md font-semibold text-shadow-md">
						Blood Group
					</label>
					<select onChange={props.handleInput} className=" outline-none border-2 border-red-800  shadow-lg hover:bg-red-700  focus:ring-0" name="bloodGroup" id="bloodGroup" value={props.state.bloodGroup}>
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
			</div>
		</form>
  );
}

function StepForm3(props) {
  return (
		<form>
			<div className="flex flex-wrap justify-between p-4">
				<div className="w-48 my-2">
					<label htmlFor="profileImage" className="text-md font-semibold text-shadow-md">
						Profile Image
					</label>
					<input onChange={(e) => props.fileHandler(e, "profileImage")} type="file" id="profileImage" name="profileImage" className="block   outline-none  text-black border-2 border-red-500 hover:bg-red-700 focus:bg-black focus:ring-0" required></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="medicalReport" className="text-md font-semibold text-shadow-md">
						Medical / Blood Report
					</label>
					<input onChange={(e) => props.fileHandler(e, "medicalReport")} type="file" id="medicalReport" name="medicalReport" className="block   outline-none   border-2 border-red-500  hover:bg-red-700 focus:bg-black focus:ring-0" required></input>
				</div>
			</div>
		</form>
  );
}

function StepForm4 (props) {
	console.log(props.state.postOffices)
  return (
		<form>
			<div className="flex flex-wrap justify-between p-4">
				<div className="w-48 my-2">
					<label htmlFor="pincode" className="text-md font-semibold text-shadow-md">
						Pincode
					</label>
					<input onChange={props.handleInput} type="number" id="pincode" name="pincode" value={props.state.pincode} className="mt-1 block    outline-none border-2 border-red-800     shadow-lg hover:bg-red-700 focus:ring-0" placeholder="Enter your pincode " required></input>
					<span>{ props.state.errors.pincode ? "Invalid PinCode": ""}</span>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="state" className="text-md font-semibold text-shadow-md">
						State
					</label>
					<input readOnly={true} onChange={props.handleInput} type="text" id="state" name="state" value={props.state.state} className=" mt-1 block   outline-none border-2 border-red-800     shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0" placeholder="Enter your state" required></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="district" className="text-md font-semibold text-shadow-md">
						District
					</label>
					<input readOnly={true} onChange={props.handleInput} type="text" id="district" name="district" value={props.state.district} className="mt-1 block   outline-none border-2 border-red-800    shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0" placeholder="Enter your district" required></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="postOffice" className="text-md font-semibold text-shadow-md">
						Post Office
					</label>
					<select name="postOffice" id="postOffice" className="border-2 border-red-800" onChange={props.handleInput} value={props.state.postOffice}>
						{
							props.state.postOffices.map((val, index) => {
								return (
									<option value={val} key={index}>
										{val}
									</option>
								);
							})
						}
					</select>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="address" className="text-md font-semibold text-shadow-md">
						Address
					</label>
					<input onChange={props.handleInput} type="text" id="address" name="address" value={props.state.location ? props.state.location.address : ""} className="mt-1 block   outline-none border-2 border-red-800    shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0" placeholder="Enter your address" required></input>
				</div>
				<div className="w-48 my-2">
					<label htmlFor="password" className="text-md font-semibold text-shadow-md">
						Password
					</label>
					<input onChange={props.handleInput} type="password" id="password" name="password" className="mt-1 block   outline-none border-2 border-red-800  shadow-lg hover:bg-red-700 focus:ring-0" placeholder="Enter your Password" required></input>
				</div>
			</div>
			<div className={props.state.locationFetching == null || props.state.locationFetching == "yes" ? "" : "hidden"}>
				<Loader />
			</div>
		</form>
  );
}

export default Form;
