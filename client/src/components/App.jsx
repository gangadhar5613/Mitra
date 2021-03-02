import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null
    }
  }

  async componentDidMount () {
    const response = await fetch("/api");
    const {title} = await response.json()
    this.setState({
      title
    })
  }

  render () {
    return <h1 className="text-2xl">{this.state.title}</h1>
  }
}

export default App;