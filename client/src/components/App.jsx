import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
import Register from './auth/Register';
import Login from './auth/Login';
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("/api");
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
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
