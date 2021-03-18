import React from 'react'
import Chart from '../Chart'
import img from '../../../public/images/user.png'
import BloodDonated from './BloodDonated';
import FundsRaised from './FundsRaised'
import { Link } from 'react-router-dom';
import DonorsAccepted from './DonorsAccepted';
import Loader from "../Loader";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      user: null,
      raisedRequests: [],
      donated: [],
      sendedDonateRequest: [],
      fundsDonated: [],
      err: false
    };
  }


  renderStatus = () => {
    const {user, raisedRequests, donated, sendedDonateRequest} = this.state
    let step = this.state.status;
    switch (step) {
		case 1:
        return <OverAllStatus user={user}/>;
			break;
		case 2:
			return <BloodRequestsRaised raisedRequests={raisedRequests} />;
			break;
		case 3:
			return <BloodDonated donated={donated} />;
			break;
		// case 4:
		//   return <FundsRaised />;
		//   break;
		case 5:
			return <DonorsAccepted sendedDonateRequest={sendedDonateRequest} />;
			break;
		default:
			return <OverAllStatus />;
			break;
	}
  };

  fetchFn = async (endpoint = "") => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/v1/user${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    const data = await response.json();
    return data;
  }

  handleStep = async (step, name) => {
    let data = [];

    switch (step) {
		case 2:
			data = await this.fetchFn("/blood/request");
			break;
		case 3:
			data = await this.fetchFn("/blood/donated");
			break;
		// case 4:
		// 	data = await this.fetchFn("/funds/donated");
		// 	break;
		case 5:
			data = await this.fetchFn("/donate/request");
			break;
		default:
			data = await this.fetchFn();
			break;
	}

  console.log(data)

    this.setState({
      status: step,
      [name]: data,
      err: data ? false : true
    })
  };

  async componentDidMount () {
    const data = await this.fetchFn();
    this.setState({
      user: data,
      status: 1
    })
  }

  render () {
    console.log(this.state.user)
    if(!this.state.user) return <Loader />
    return (
			<main className="h-screen dashboard  container py-20 mx-auto  ">
				<div className="container">
          <h3 className="text-3xl font-semibold text-center my-6">Dashboard</h3>
          <div className="flex flex-row items-center justify-between">
            <h3 className="p-2 justify-end shadow-lg rounded-md border-l-2 border-r-2 border-red-700 inline-block items-center text-lg font-semibold">
              Welcome<Link to="/profile/setting" className="text-xl font-bold mx-2 hover:underline text-red-500">{this.props.user.fullName}</Link>
            </h3>
            <Link to="/bloodrequest/create" className="bg-red-600 shadow-lg hover:scale-110 text-white text-xl rounded-md px-4 py-1">
                Create Blood Request
            </Link>
          </div>
          <section className="my-8 mx-auto">
              <div className="flex flex-row  border-l-4 border-r-4 rounded-md   border-red-500  justify-around py-4 items-center  shadow-md">
                <button onClick={(e) => this.handleStep(1, "user")} className={this.state.status == "1" ? " shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2" : "shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2"}>
                  Overall Status
                </button>
                <button onClick={(e) => this.handleStep(2, "raisedRequests")} className={this.state.status == "2" ? " shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2" : "shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2"}>
                  Blood Requests Raised
                </button>
                <button onClick={(e) => this.handleStep(3, "donated")} className={this.state.status == "3" ? " shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2" : "shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2"}>
                  Blood Donated
                </button>
                <button onClick={(e) => this.handleStep(4, "sendedDonateRequest")} className={this.state.status == "4" ? " shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2" : "shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2"}>
                  Blood Donation Request
                </button>
                {/* <button onClick={(e) => this.handleStep(5, "fundsDonated")} className={this.state.status == "5" ? " shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2" : "shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2"}>Funds Donated</button> */}
              </div>
            <div className="border-r-2 my-5 border-l-2 border-b-2 border-dashed border-red-600  w-full">{this.renderStatus()}</div>
          </section>
				</div>
			</main>
	);
  }
}

function OverAllStatus (props) {
  const { user } = props.user;
  console.log(user)
    return (
		<div className="flex  container rounded   border-r-2 border-b-2 pb-5 border-l-2 border-red-500 border-dashed    pl-20 flex-row">
			<div className="flex flex-col">
				<StatusCard title={"Blood Requests Raised"} value={user.raisedRequests.length} />
				<StatusCard title={"Blood Donated"} value={user.donated.length} />
				<StatusCard title={"Request Sent"} value={user.sendedDonateRequest.length} />
			</div>
			<div className="flex justify-center items-end ml-20">
				<Chart raisedRequests={user.raisedRequests.length} donated={user.donated.length} sendedDonateRequest={user.sendedDonateRequest.length} />
			</div>
			<div className="flex items-center justify-center mx-40">
				<img className="w-96 h-40" src={img} alt="user"></img>
			</div>
		</div>
	);
}

function BloodRequestsRaised (props) {
  console.log(props)
  return (
    <section className='w-full px-5 my-4 container'>
      <div>
        <table className='border-l border-r border-2 border-red-800 rounded'>
          <thead className='border-2 shadow-xl  bg-red-800 text-white '>
            <tr className=''>
              <th className='w-96  py-4 text-xl border-l border-2 border-white mx-2'>Title</th>
              <th className='w-96 border-l border-2 border-white text-xl'>Requested By</th>
              <th className='w-96 border-l border-2 border-white text-xl'>Hospital</th>
              <th className='w-96 border-l border-2 border-white text-xl'>Donated By</th>
              <th className='w-96 border-l border-2 border-white text-xl'>Status</th>
              <th className='w-96 border-l border-2 border-white text-xl'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-center  items-center'>
            {props.raisedRequests.map((request) => <TableData request={request} key={request._id}/>)}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableData (props) {
  console.log(props)
  return (
		<tr className="shadow-xl">
			<td className="border-l border-2 border-black">
				<h3 className="cursor-pointer">{`${props.request.requestedFor.bloodGroup} blood required (${props.request.title})`}</h3>
			</td>
			<td className="border-l border-2 border-black">
				<div className="flex flex-row items-center justify-center">
					<i className="fas text-2xl text-yellow-500 fa-user"></i>
					<h3 className="text-2xl ml-2 hover:underline  cursor-pointer">Dummy</h3>
				</div>
			</td>
			<td className="border-l border-2 border-black">
				<div className="flex flex-row items-center justify-center">
					<i className="fas text-2xl text-blue-600  fa-hospital"></i>
					<span className="text-lg ml-2 cursor-pointer hover:underline">{`${props.request.location.hospital}`}</span>
				</div>
			</td>
			<td className="border-l border-2 border-black">
				<div className="flex flex-row items-center justify-center">
					<ul>
						{props.request.donors.map((donor) => (
							<li key={donor._id}>
								<i className="fas text-2xl text-green-600 mr-2 fa-user"></i>
								<Link to="#">{donor.fullName}</Link>
							</li>
						))}
					</ul>
				</div>
			</td>
			<td className="border-l border-2 border-black">
				<span className="bg-yellow-300 p-2  rounded">{`${props.request.status}`}</span>
			</td>
			<td className="border-l border-2 border-black">
				<button className="bg-green-600 rounded mr-2 text-white px-4 py-1">Details</button>
			</td>
		</tr>
  );
}

function StatusCard (props) {
  return (
    <section className='mt-5  '>
      <div className='bloodRequests-data  flex flex-row items-center'>
        <div className='shadow-md p-2 bg-yellow-400  mr-4 w-36 h-32 flex flex-col items-center justify-center text-center'>
          <h3 className='text-md  text-white font-semibold '>{props.title}</h3>
          <span className='text-3xl text-red-800  font-bold text-shadow-md'>{props.value}</span>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;