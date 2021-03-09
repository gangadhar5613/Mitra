import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import BloodRequestFeed from "./bloodRequestFeed/BloodRequestFeed";
import FundRaisingEvents from "./fundRaisingFeed/FundRaisingFeed";
import UserDashboard from "./userDashboard/UserDashboard";
import FundRaising from './FunRaising'
import BloodRequestForm from './BloodRequestForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
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
          <Route path="/bloodrequest-feed" component={BloodRequestFeed} />
          <Route path="/fundraising-feed" component={FundRaisingEvents} />
          <Route path="/user-dashboard" exact>
            <UserDashboard />
          </Route>
          <Route path='/request' >
            <BloodRequestForm />
          </Route>
          <Route path='/bloodrequest' >
            <FundRaising />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
