import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Feed from "./feed/Feed";
import UserDashboard from "./userDashboard/UserDashboard";
import FundRaising from "./FunRaising";
import BloodRequestForm from "./BloodRequestForm";
import BouncingLoader from "./BouncingLoader";
import PageNotFound from "./PageNotFound";
import About from "./About";
import FAQs from "./FAQs";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			isLoggedIn: false,
			isLoading: true,
		};
	}

	updateUser = (user, isLoggedIn, isLoading) => {
		this.setState({ user, isLoggedIn, isLoading });
	};

	async componentDidMount() {
		const token = localStorage.getItem("token");

		if (token) {
			const response = await fetch("/api/v1/user", {
				method: "GET",
				headers: {
					Authorization: token,
				},
			});
			const { user, err } = await response.json();
			if (err) {
				localStorage.clear();
				this.updateUser(null, false, false);
			} else {
				this.updateUser(user, true, false);
			}
		} else {
			this.setState({ isLoading: false });
		}
	}

	render() {
		const { isLoggedIn, user, isLoading } = this.state;
		if (isLoading) return <BouncingLoader />;
		return <BrowserRouter>{isLoggedIn ? <AuthRoute user={this.state.user} updateUser={this.updateUser} logout={this.handleLogout} /> : <NoAuthRoute user={this.state.user} updateUser={this.updateUser} />}</BrowserRouter>;
	}
}

function AuthRoute(props) {
  return (
		<>
			<Header user={props.user} updateUser={props.updateUser} />
			<Switch>
				<Route path="/" exact>
					<Home handleBloodRequest={props.handleBloodRequest} />
				</Route>
				<Route path="/feed" component={Feed} />
				<Route path="/user/dashboard" exact>
					<UserDashboard user={props.user} handleBloodRequest={props.handleBloodRequest} />
				</Route>
				<Route path="/bloodrequest/create" exact>
					<BloodRequestForm />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/faqs" exact>
					<FAQs />
				</Route>
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
  );
}

function NoAuthRoute(props) {
  return (
		<>
			<Header user={props.user} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register">
					<Register updateUser={props.updateUser} user={props.user} />
				</Route>
				<Route path="/login">
					<Login updateUser={props.updateUser} user={props.user} />
				</Route>
				<Route path="/feed" component={Feed} />
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/faqs" exact>
					<FAQs />
				</Route>
				<Route path="*">
					<PageNotFound />
				</Route>
			</Switch>
		</>
  );
}

export default App;
