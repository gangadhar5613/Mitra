import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home';
import Register from './auth/Register'
import Login from './auth/Login'




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
          {/* <Route path='/' exact>
               <Home />
          </Route> */}
          <Route path='/' exact >
              <Home />
          </Route>
      </BrowserRouter>
    );
  }
}

export default App;
