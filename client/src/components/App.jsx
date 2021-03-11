import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Feed from './feed/Feed'
import UserDashboard from "./userDashboard/UserDashboard";
import FundRaising from './FunRaising';
import BloodRequestForm from './BloodRequestForm';
import BouncingLoader from "./BouncingLoader";
import PageNotFound from "./PageNotFound";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoggedIn: false,
      isLoading: true,
    };
  }

  updateUser (user) {
    this.setState({user, isLoggedIn: true,isLoading:false})
  }

  async componentDidMount () {
    const token = localStorage.getItem("token")
    
    if (token)
    {
      console.log(token)
      const response = await fetch("/api/v1/user", {
        method: 'GET',
        headers: {
        Authorization: token
        }
      });
      const { user, error } = await response.json();
      console.log(user)
      if(error) return localStorage.clear()
      this.updateUser(user)
    } else {
      this.setState({isLoading: false})
    }
  }

  render () {
    const { isLoggedIn, user, isLoading } = this.state;
    if(isLoading) return <BouncingLoader />
    return (
		<BrowserRouter>
        {(isLoggedIn ) ? <AuthRoute user={this.state.user} /> : <NoAuthRoute user={this.state.user}  />}
		</BrowserRouter>
	);
}
}


function AuthRoute(props)
{
  console.log('Authorized')
  return (
    <>
      <Header  />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/user/dashboard" exact>
          <UserDashboard />
        </Route>
        <Route path="/bloodrequest">
          <BloodRequestForm />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

function NoAuthRoute(props)
{

  return (
    <>
      <Header user = {props.state.user} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
        <Route path='*'>
          <PageNotFound />
        </Route>
			</Switch>
    </>
  );
}

export default App;
