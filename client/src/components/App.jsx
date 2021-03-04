import React from "react";
import Register from './auth/Register'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null
    }
  }

  async componentDidMount () {
    // const response = await fetch("/api");
    // const {title} = await response.json()
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