import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Feed from './feed/Feed'
import UserDashboard from "./userDashboard/UserDashboard";
import FundRaising from './FunRaising'
import BloodRequestForm from './BloodRequestForm'
import PageNotFound from './PageNotFound'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      bloodRequestFormAuthorized:false,
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/v1");
    const { title } = await response.json();
    this.setState({
      title,
    });
  }

  render() {
    return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/feed" component={Feed} />
				<Route path="/user/dashboard" exact>
					<UserDashboard />
				</Route>
				<Route path="/bloodrequest">
					<FundRaising />
				</Route>
        <Route path='*'>
           <PageNotFound />
        </Route>
			</Switch>
		</BrowserRouter>
	);
  }
}

export default App;
