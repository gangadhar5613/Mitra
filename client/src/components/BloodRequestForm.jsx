import React from 'react'
import requestBloodImg from '../../public/images/requestBlood.png'
import Loader from "./Loader";

class BloodRequestForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			requestedType: "Whole Blood",
			bloodGroup: "A+",
			title: "Accident",
			hospital: "",
			medicalReports: [],
			message: "",
			searchingHospital: false,
			hospitalsList: null,
			lat: "",
			lng: "",
			suggestedHospital: "",
			suggestedHospitalsList: null,
			pincode: "",
			locationFetching: "",
			location: null,
			state: "",
			district: "",
			postOffice: "",
			postOffices: [],
			images: [],
			errors: {},
		};
	}

	countDigits = (n) => {
		var count = 0;
		if (n >= 1) ++count;
		while (n / 10 >= 1) {
			n /= 10;
			++count;
		}
		return count;
	};

	handleStep = (event) => {
		event.preventDefault();
		if (this.state.step < 7) {
			this.setState((prevState) => {
				return {
					step: prevState.step + 1,
				};
			});
		}
	};

	handleBackStep = (event) => {
		event.preventDefault();
		if (this.state.step > 0) {
			this.setState((prevState) => {
				return {
					step: prevState.step - 1,
				};
			});
		}
	};

  handleEvent = (event, file, document) => {
    this.state[document].push({
      data: Array.from(new Uint8Array(event.target.result)),
      type: file.type.split("/").pop(),
    });
    this.setState({
      [document]: this.state[document]
    })
  };

	fileHandler = (event) => {
    const { name } = event.target;
    for (const file of event.target.files) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.addEventListener("loadend", (e) => this.handleEvent(e, file, name));
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
				}
			);
		}
	};

	handleInput = async (event) => {
		let { name, value } = event.target;

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
				const response = await fetch(`/api/v1/location/pincode`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
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
			case "requestedType":
				this.setState({
					requestedType: value,
				});
				break;
			case "bloodGroup":
				this.setState({
					bloodGroup: value,
				});
				break;
			case "title":
				this.setState({
					title: value,
				});
				break;
			case "hospital":
				this.fetchingLocation();
				this.setState({
					hospital: value,
				});
				let location = {
					location: {
						place: value,
						lat: this.state.lat,
						lng: this.state.lng,
					},
				};

				if (value.length > 3) {
					fetch(`/api/v1/location/search`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(location) })
						.then((res) => res.json())
						.then((data) =>
							this.setState({
								suggestedHospitalsList: data.predictions,
							})
						);
				}

				break;
			case "message":
				this.setState({
					message: value,
				});
				break;
			case "hospital":
				this.setState({
					hospital: value,
				});
				break;
			case "pincode":
				this.setState({
					pincode: value,
				});
				break;
			case "postOffice":
				this.setState({
					postOffice: value,
				});
				break;
			default:
				break;
		}
	};

  formHandler = async (e) => {
		e.preventDefault();
		const { title, state, city, lat, lng, hospital, pincode, images, bloodGroup, requestedType, message, medicalReports } = this.state;
		const body = {
			title,
			location: {
				state,
				city,
				lat,
				lng,
				hospital,
				pincode,
			},
			images,
			requestedFor: {
				bloodGroup,
				requestedType,
			},
			feed: {
				message,
				medicalReports,
			},
		};

		const response = await fetch("/api/v1/blood/create", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: localStorage.getItem("token") },
			body: JSON.stringify({ blood: body }),
		});

		const { err, request } = await response.json();
		console.log(err, request);;
		alert("created request");;
  }

	render() {
		return (
			<section className="pt-20 container h-screen w-full mx-auto flex items-center  justify-center">
				<div className="shadow-2xl flex justify-center relative left-20 p-10 w-full flex-1   bg-red-600  ">
					<form className="flex flex-col">
						<div className="text-center py-5">
							<h2 className="text-2xl text-yellow-200 font-bold">Blood Request Form</h2>
						</div>
						<div className={this.state.step == 1 ? "flex flex-col" : "hidden"}>
							<label className="text-xl font-semibold mb-1 text-white">Do you need whole blood or platelets?</label>
							<select onChange={this.handleInput} name="requestedType" value={this.state.requestedType} className="py-1 my-3 border-2 border-yellow-500 outline-none" placeholder="Choose request type">
								<option>Whole Blood</option>
								<option>Platelets</option>
								<option>Double Red Cell</option>
								<option>AB Plasma</option>
							</select>
						</div>
						<div className={this.state.step == 2 ? "flex flex-col" : "hidden"}>
							<label className="text-xl font-semibold mb-1 text-white">What blood group do you need ?</label>
							<select onChange={this.handleInput} name="bloodGroup" value={this.state.bloodGroup} className="py-1 my-3 border-2 border-yellow-500 outline-none" placeholder="Pick a blood group">
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
						<div className={this.state.step == 3 ? "flex flex-col" : "hidden"}>
							<label className="text-xl font-semibold mb-1 text-white" htmlFor="title">
								What is the reason of this blood request ?
							</label>
							<select onChange={this.handleInput} name="title" id="title" value={this.state.title} required className="py-1 my-3 border-2 border-yellow-500 outline-none" placeholder="Choose request type">
								<option>Accident</option>
								<option>Surgery</option>
								<option>Pregnancy</option>
								<option>Cancer</option>
								<option>Transplant</option>
								<option>Thalassemla</option>
								<option>Low HB (Hemoglobin)</option>
							</select>
						</div>
						<div className={this.state.step == 4 ? "flex flex-col" : "hidden"}>
							<div className="flex flex-wrap justify-between p-4">
								<div className="w-48 my-2">
									<label htmlFor="pincode" className="text-md font-semibold text-shadow-md">
										Pincode
									</label>
									<input onChange={this.handleInput} type="number" id="pincode" name="pincode" className="mt-1 block outline-none border-2 border-red-800     shadow-lg hover:bg-red-700 focus:ring-0" placeholder="Enter your pincode " required></input>
									<span>{this.state?.errors?.pincode ? "Invalid PinCode" : ""}</span>
								</div>
								<div className="w-48 my-2">
									<label htmlFor="state" className="text-md font-semibold text-shadow-md">
										State
									</label>
									<input readOnly={true} onChange={this.handleInput} type="text" id="state" name="state" value={this.state.state} className=" mt-1 block   outline-none border-2 border-red-800     shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0" placeholder="Enter your state" required></input>
								</div>
								<div className="w-48 my-2">
									<label htmlFor="district" className="text-md font-semibold text-shadow-md">
										District
									</label>
									<input readOnly={true} onChange={this.handleInput} type="text" id="district" name="district" value={this.state.district} className="mt-1 block   outline-none border-2 border-red-800    shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0" placeholder="Enter your district" required></input>
								</div>
								<div className="w-48 my-2">
									<label htmlFor="postOffice" className="text-md font-semibold text-shadow-md">
										Post Office
									</label>
									<select name="postOffice" id="postOffice" className="border-2 border-red-800" onChange={this.handleInput} value={this.state.postOffice}>
										{this.state.postOffices.map((val, index) => {
											return (
												<option value={val} key={index}>
													{val}
												</option>
											);
										})}
									</select>
								</div>
								<div className={this.state.locationFetching == null || this.state.locationFetching == "yes" ? "" : "hidden"}>
									<Loader />
								</div>
							</div>
						</div>
						<div className={this.state.step == 5 ? "flex flex-col" : "hidden"}>
							<label className="text-xl font-semibold mb-1 text-white">At which hospital you need a blood donor ?</label>
							<input onChange={this.handleInput} name="hospital" value={this.state.hospital} required className="py-1 my-1 border-2 border-yellow-500 outline-none" type="text" name="hospital" placeholder="Search hospital name and select"></input>
							<div onChange={this.handleHospitalSelect} className={this.state.hospital ? "w-96 h-full px-4 py-2 shadow-md my-2" : "hidden"}>
								<label className="text-md text-white">Select hospital from this list</label>
								<select onChange={this.handleInput} name="hospital">
									<option>{this.state.hospital}</option>
									{!this.state.suggestedHospitalsList
										? null
										: this.state.suggestedHospitalsList.map((hospital, index) => {
												return <option key={index}>{hospital.description}</option>;
										})}
								</select>
							</div>
						</div>
						<div className={this.state.step == 6 ? "flex flex-col" : "hidden"}>
							<label htmlFor="images" className="text-xl font-semibold mb-1 text-white">
								Please upload patient photos
							</label>
							<input onChange={this.fileHandler} id="images" name="images" multiple={true} required className="py-1 my-3 border-2 border-yellow-500 outline-none" type="file" placeholder="Search hospital name and select"></input>
						</div>
						<div className={this.state.step == 7 ? "flex flex-col" : "hidden"}>
							<div>
								<label htmlFor="medicalReports" className="text-xl font-semibold mb-1 text-white">
									Please Upload medical report which is attested by hospital
								</label>
								<input onChange={this.fileHandler} name="medicalReports" multiple={true} id="medicalReports" required className="py-1 my-3 order-2 border-yellow-500 outline-none" type="file" placeholder="Search hospital name and select"></input>
							</div>
							<div>
								<label className="text-xl font-semibold mb-1 text-white" htmlFor="message">
									Write a message (current status) to donor about the requirement briefly
								</label>
								<textarea onChange={this.handleInput} rows="10" cols="20" name="message" id="message" value={this.state.message} required className="py-1 my-3 border-2 border-yellow-500 outline-none" placeholder="Explain donors why you need blood and how urgent" name="message"></textarea>
							</div>
						</div>
						<div className="flex flex-row my-2 justify-between items-center">
							<button onClick={this.handleBackStep} id="1" className={this.state.step > 1 ? "bg-yellow-500 text-white  px-6 py-2" : "hidden"}>
								<i className="fas text-3xl text-white fa-arrow-left"></i>
							</button>
              {this.state.step == 7 ?
              (
								<button onClick={this.formHandler} id="1" className="bg-yellow-500 text-white px-6 py-2">
									Submit
								</button>
							) :  (
								<button onClick={this.handleStep} id="1" className="bg-yellow-500 text-white px-6 py-2">
									<i className="fas text-3xl text-white fa-arrow-right"></i>
								</button>
							) }
						</div>
						<div className="text-center  my-3">
							<span className="text-2xl text-white font-light">{this.state.step}/7</span>
						</div>
					</form>
				</div>
				<div className=" flex-1 flex justify-center mx-10 ">
					<img className=" w-96 h-96" src={requestBloodImg} alt="request blood illustration"></img>
				</div>
			</section>
		);
	}
}

export default BloodRequestForm