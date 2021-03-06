import React from "react";
import Register from './auth/Register';
import Auth from './auth/Auth'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null
    }
  }

  async componentDidMount () {
    this.setState({
      title:''
    })
  }

  render () {
    return (
      <>
            <Register />
      </>
    )
  }
}

export default App;