import React from 'react'
import Steps from './Steps'
import Form from './Form'
import Loader from "../Loader";
import { Redirect } from 'react-router';

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			otpSent: false,
			otpError: false,
			mobileVerifiedSuccessful: false,
			mobile: "",
			mobileResponse: null,
			errors: {
				mobile: "",
			},
			mobileOtp: ["","","","","",""],
			otp: null,
			otpError: false,
			firstName: "",
			middleName: "",
			lastName: "",
			email: "",
			bloodGroup: "",
			dob: "",
			pincode: "",
			locationFetching: "",
			location: null,
			address: "",
			state: "",
			district: "",
			postOffice: "",
			postOffices: [],
			profileImage: null,
			medicalReport: null,
			user: null,
			lat: null,
			lng: null,
			isLoggedIn: false,
		};
	}

	handleNextForm = () => {
		this.setState((prevState) => {
			return {
				step: prevState.step + 1,
			};
		});
	};

	handlePrevForm = (event) => {
		this.setState((prevState) => {
			return {
				step: prevState.step - 1,
			};
		});
	};

	handleVerifyOtp = async (event) => {
		if (this.state.mobileOtp.length < 6) return;

		let body = {
			user: {
				mobile: this.state.mobileResponse.to,
				code: this.state.mobileOtp.join(""),
			},
		};

		await fetch(`/api/v1/user/mobile/verify`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
			.then((res) => res.json())
			.then((data) =>
				data.status == "approved"
					? this.setState((prevState) => {
							return { mobileVerifiedSuccessful: true, step: prevState.step + 1};
          })
					: this.setState({ mobileVerifiedSuccessful: false, otpError: true, mobileOtp: ["","","","","",""] })
			);
	};

	async sendOtp() {
		let user = {
			user: {
				mobile: this.state.mobile,
			},
		};
		await fetch(`/api/v1/user/mobile`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })
			.then((res) => res.json())
			.then((data) => this.setState({ mobileResponse: data }));
	}

	handleOtp = async () => {
		if (this.state.mobile.length !== 10) return;
		this.sendOtp();
		this.setState(() => {
			return {
				otpSent: true,
			};
		});
	};

	handleOtpInput = (event) => {
		let { name, value } = event.target;
		if (value.length > 1) return;

		switch (name) {
			case "first":
				this.setState((prevState) => {
					prevState.mobileOtp[0] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			case "second":
				this.setState((prevState) => {
					prevState.mobileOtp[1] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			case "third":
				this.setState((prevState) => {
					prevState.mobileOtp[2] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			case "fourth":
				this.setState((prevState) => {
					prevState.mobileOtp[3] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			case "fifth":
				this.setState((prevState) => {
					prevState.mobileOtp[4] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			case "sixth":
				this.setState((prevState) => {
					prevState.mobileOtp[5] = value;
					return {
						mobileOtp: prevState.mobileOtp,
					};
				});
				break;
			default:
				break;
		}
	};

	countDigits = (n) => {
		var count = 0;
		if (n >= 1) ++count;
		while (n / 10 >= 1) {
			n /= 10;
			++count;
		}
		return count;
	};

	fileHandler = (event, document) => {
		var file = event.target.files[0];
		var reader = new FileReader();
		reader.onload = (event) => {
			this.setState({
				[document]: {
					data: Array.from(new Uint8Array(event.target.result)),
					type: file.type.split("/").pop(),
				},
			});
		};

		reader.readAsArrayBuffer(file);
	};

	handleInput = async (event) => {
		let { name, value } = event.target;
		let errors = this.state.errors;

		if (name == "mobile" && value.length > 10) return;

		if (name == "pincode") {
			if (value.length > 6) {
				return;
			}
			let body = {
				location: {
					pincode: value,
				},
			};
			if (this.countDigits(value) == 6) {
				this.setState({
					locationFetching: "yes",
				});
				const response = await fetch(`/api/v1/location/pincode`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
				const { data } = await response.json();
				if (data) {
					this.state.errors.pincode = false;
					this.setState({
						location: data,
						state: data.state,
						district: data.district,
						postOffices: data.postOffices,
						postOffice: data.postOffices[0],
						locationFetching: "no",
						errors: this.state.errors,
					});
				} else {
					this.state.errors.pincode = true;
					this.setState({
						locationFetching: "no",
						pincode: "",
						errors: this.state.errors,
					});
				}
			}
		}

		switch (name) {
			case "firstName":
				this.setState({
					firstName: value,
				});
				break;

			case "middleName":
				this.setState({
					middleName: value,
				});
				break;
			case "lastName":
				this.setState({
					lastName: value,
				});
				break;
			case "mobile":
				errors.mobile = this.countDigits(value) !== 10 ? "" : "Please enter valid 10 digit mobile number";
				this.setState({
					mobile: value,
					otpSent: false,
				});
				break;
			case "email":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					email: value,
				});
				break;
			case "bloodGroup":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					bloodGroup: value,
				});
				break;
			case "dob":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					dob: value,
				});
				break;
			case "profileImage":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					mobile: value,
				});
				break;
			case "medicalReport":
				//    errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					medicalReport: value,
				});
				break;
			case "pincode":
				this.setState({
					pincode: value,
				});
				break;
			case "address":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					address: value,
				});
				break;
			case "password":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					password: value,
				});
				break;
			case "postOffice":
				// errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
				this.setState({
					postOffice: value,
				});
				break;
			default:
				break;
		}
	};

	fetchingLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.setState({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
					() => {
						console.log("not supported");
					});
		}
	};

  handleUserSubmit = async () => {

    const { firstName, lastName, middleName, dob, email, bloodGroup, state, district, postOffice, address, pincode, password, mobile, medicalReport, lat, lng, profileImage } = this.state;
    if (!this.state.mobileVerifiedSuccessful) {
      return;
    }

    if (!(firstName && lastName && email && dob && bloodGroup)) {
      return this.setState({
        step: 2
      })
    }

    if (!(medicalReport)) {
        return this.setState({
        step: 3,
      });
    }

    if (!(state && district && postOffice && address && pincode && password)) {
      return this.setState({
        step: 4,
      });
    }

		let data = {
			user: {
				firstName,
        lastName,
				dob,
				email,
				bloodGroup,
				password,
				mobile,
				medicalReport,
				location: {
					state,
					district,
					postOffice,
					address,
					pincode,
					lat,
					lng,
				},
				medicalReport,
				profileImage,
			},
		};

		if (middleName) {
			data.user.middleName = middleName;
		}

		const response = await fetch("/api/v1/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		const { user, error } = await response.json();
		if (user) {
			localStorage.setItem("token", user.token);
			this.setState({
				isLoggedIn: true,
			});
		}
		console.log(user, error);
	};

	componentDidMount() {
		this.fetchingLocation();
	}

	render() {
		if (this.state.isLoggedIn) return <Redirect to="/" />;
		return (
			<>
				<section className="flex items-center register relative flex-row w-screen container mx-auto  h-screen">
					<section className="w-full bg-yellow-400    shadow-xl mx-40 md:w-full   ">
						<div className="heading flex  flex-row justify-between">
							<div className="flex justify-center  bg-red-500 cursor-pointer  shadow-md py-2 border-r border-gray-300 w-full items-center ">
								<h2 className="text-xl">Register</h2>
							</div>
						</div>
						<div className="flex flex-row md:flex-shrink-0 h-96 ">
							<div className="steps w-96 h-96 ">
								<Steps step={this.state.step} />
							</div>
							<div className="form   flex-1">
								<Form handleOtp={this.handleOtp} handleVerifyOtp={this.handleVerifyOtp} handleOtpInput={this.handleOtpInput} state={this.state} handleInput={this.handleInput} otpSent={this.state.otpSent} handlePrevForm={this.handlePrevForm} handleNextForm={this.handleNextForm} step={this.state.step} fileHandler={this.fileHandler} handleUserSubmit={this.handleUserSubmit} />
							</div>
						</div>
						<div className={this.state.otpSent && !this.state.mobileResponse ? "absolute  left-96 top-96" : "hidden"}>
							<Loader />
						</div>
					</section>
				</section>
			</>
		);
	}
}

export default Register;